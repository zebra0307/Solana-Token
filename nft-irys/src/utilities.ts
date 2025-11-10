import type { Keypair, Umi } from "@metaplex-foundation/umi";
import { sol } from "@metaplex-foundation/umi";
import { create } from "@metaplex-foundation/mpl-core";
import { createGenericFile, generateSigner } from "@metaplex-foundation/umi";
import { base58 } from "@metaplex-foundation/umi/serializers";
import fs from "node:fs";
import path from "node:path";

export const mainnetAddress = "https://node1.irys.xyz";
export const devnetAddress = "https://devnet.irys.xyz";

export const filePath = "./src/user_wallet.json";

export function loadKeypairFromFile(secretFilePath: string, umi: Umi): Keypair {
  const secret = JSON.parse(fs.readFileSync(secretFilePath, "utf-8"));
  const secretKey = Uint8Array.from(secret);
  return umi.eddsa.createKeypairFromSecretKey(secretKey);
}

export function getOrCreateWallet(umi: Umi): Keypair {
  if (fs.existsSync(filePath)) {
    return loadKeypairFromFile(filePath, umi);
  } else {
    const keypair = generateSigner(umi);
    fs.writeFileSync(filePath, JSON.stringify(Array.from(keypair.secretKey)));
    console.log("Created a new wallet at:", filePath);
    return keypair;
  }
}

export async function requestAirdrop(umi: Umi): Promise<void> {
  const publicKey = umi.identity.publicKey;
  const balance = await umi.rpc.getBalance(publicKey);

  console.log(`> Current balance for ${publicKey}: ${balance.toString()} SOL`);

  const balanceInSol = Number(balance.basisPoints) / 1_000_000_000;

  if (balanceInSol < 2.0) {
    console.log("> You do not have enough funds. Requesting airdrop...");
    try {
      await umi.rpc.airdrop(publicKey, sol(5));
      console.log(`> 5 SOL airdrop to ${publicKey} is successful`);
      // Wait for airdrop to be confirmed
      await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (e) {
      console.log("> Airdrop request failed:", e);
    }
  } else {
    console.log(
      "> You have enough funds to continue with the minting process."
    );
  }
}

export async function uploadImage(
  imagePath: string,
  umi: Umi
): Promise<string> {
  const imageFile = fs.readFileSync(imagePath);
  const extension = path.extname(imagePath).toLowerCase();
  const mimeType = extension === ".png" ? "image/png" : "image/jpeg";

  const umiImageFile = createGenericFile(imageFile, path.basename(imagePath), {
    tags: [{ name: "Content-Type", value: mimeType }],
  });

  console.log(`Uploading image: ${path.basename(imagePath)}...`);
  const imageUri = await umi.uploader.upload([umiImageFile]).catch((err) => {
    throw new Error(err);
  });

  console.log(`Image URI: ${imageUri[0]}`);
  return imageUri[0] as string;
}

interface Metadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{ trait_type: string; value: string }>;
  properties: {
    files: Array<{ uri: string; type: string }>;
    category: string;
  };
}

export async function uploadMetadata(
  metadata: Metadata,
  umi: Umi
): Promise<string> {
  console.log(`Uploading metadata for: ${metadata.name}...`);
  const metadataUri = await umi.uploader.uploadJson(metadata).catch((err) => {
    throw new Error(err);
  });

  console.log(`Metadata URI: ${metadataUri}`);
  return metadataUri;
}

export async function mintNft(
  metadataUri: string,
  name: string,
  umi: Umi
): Promise<void> {
  const mintSigner = generateSigner(umi);

  console.log(`Creating NFT: ${name}...`);
  const tx = await create(umi, {
    asset: mintSigner,
    name: name,
    uri: metadataUri,
  }).sendAndConfirm(umi);

  const signature = base58.deserialize(tx.signature)[0];

  console.log(`NFT Created: ${name}`);
  console.log("View Transaction on Solana Explorer");
  console.log(`https://explorer.solana.com/tx/${signature}?cluster=devnet`);
  console.log("View NFT on Metaplex Explorer");
  console.log(
    `https://core.metaplex.com/explorer/${mintSigner.publicKey}?env=devnet`
  );
}

// Reusable function to create NFT metadata
export function createMetadata(
  name: string,
  description: string,
  imageUri: string,
  attributes: Array<{ trait_type: string; value: string }>
): Metadata {
  return {
    name: name,
    description: description,
    image: imageUri,
    attributes: attributes,
    properties: {
      files: [
        {
          uri: imageUri,
          type: "image/jpg",
        },
      ],
      category: "image",
    },
  };
}

export interface NftData {
  name: string;
  imagePath: string;
  description: string;
  attributes: Array<{ trait_type: string; value: string }>;
}

export const ZebraNfts = [
  {
    name: "Johan",
    imagePath: "./public/Johan108.png",
    description:
      "A man who fought in shadow to meet his family, he was walking on a destiny, black swan.",
    attributes: [
      { trait_type: "Breathing Style", value: "Water & Sun" },
      { trait_type: "Rarity", value: "Legendary" },
      { trait_type: "Role", value: "Protagonist" },
    ],
  },
  {
    name: "Super Bear",
    imagePath: "./public/SuperBear.png",
    description:
      "A powerful bear with supernatural abilities and fierce determination.",
    attributes: [
      { trait_type: "Type", value: "Animal Hero" },
      { trait_type: "Rarity", value: "Legendary" },
      { trait_type: "Ability", value: "Super Strength" },
    ],
  },
  {
    name: "Super Wolf",
    imagePath: "./public/SuperWolf.png",
    description:
      "A legendary wolf with incredible speed and agility, protecting the forest realm.",
    attributes: [
      { trait_type: "Type", value: "Animal Hero" },
      { trait_type: "Rarity", value: "Rare" },
      { trait_type: "Specialty", value: "Speed" },
    ],
  },
  {
    name: "Johan84",
    imagePath: "./public/Johan84.png",
    description:
      "The first and most powerful man ever lived.",
    attributes: [
      { trait_type: "Type", value: "King" },
      { trait_type: "Rarity", value: "Mythic" },
      { trait_type: "Role", value: "Antagonist" },
    ],
  },
  {
    name: "BlackSwan",
    imagePath: "./public/BlackSwan.png",
    description:
      "A team of no destiny and their aggressive fighting style and ashtetic charaters.",
    attributes: [
      { trait_type: "Breathing Style", value: "Beast" },
      { trait_type: "Rarity", value: "Rare" },
      { trait_type: "Trait", value: "Wild" },
    ],
  },
];