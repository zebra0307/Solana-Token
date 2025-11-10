# Solana NFT Minting Project - Metaplex Core

A TypeScript-based NFT minting project using Metaplex Core protocol on Solana blockchain. This project allows you to mint multiple NFTs with custom metadata and images stored on Irys (formerly Bundlr).

## 🎯 Live Deployed NFTs on Solana Devnet

**Wallet Address**: `zTNewXF4q7n1CFC1Z43pXKAyhb6nh6cpKpUEkK8BBex`

### ✅ Successfully Minted NFTs:

| NFT Name | Solana Explorer | Metaplex Explorer | Rarity |
|----------|----------------|-------------------|---------|
| **Johan** | [🔗 View on Solana](https://explorer.solana.com/address/CCHqMUafVg6ZuXqZMwuxR55oWMJctXFgB2mcEyHS69Di?cluster=devnet) | [🔗 View on Metaplex](https://core.metaplex.com/explorer/CCHqMUafVg6ZuXqZMwuxR55oWMJctXFgB2mcEyHS69Di?env=devnet) | Legendary |
| **Super Bear** | [🔗 View on Solana](https://explorer.solana.com/address/tJ8QfR71s5ipQGFh1ATEpmeKqPFzkWHPaG84F4tzmD4?cluster=devnet) | [🔗 View on Metaplex](https://core.metaplex.com/explorer/tJ8QfR71s5ipQGFh1ATEpmeKqPFzkWHPaG84F4tzmD4?env=devnet) | Legendary |
| **Super Wolf** | [🔗 View on Solana](https://explorer.solana.com/address/6q4dP3PHbDp2kroPwjUnobGFyo2djoakYN1qX411EChG?cluster=devnet) | [🔗 View on Metaplex](https://core.metaplex.com/explorer/6q4dP3PHbDp2kroPwjUnobGFyo2djoakYN1qX411EChG?env=devnet) | Rare |
| **Johan84** | [🔗 View on Solana](https://explorer.solana.com/address/HhNvPJcgGwRf6iVW5k7misPSiJLimo4r4gSTLyNFdh3z?cluster=devnet) | [🔗 View on Metaplex](https://core.metaplex.com/explorer/HhNvPJcgGwRf6iVW5k7misPSiJLimo4r4gSTLyNFdh3z?env=devnet) | Mythic |
| **BlackSwan** | [🔗 View on Solana](https://explorer.solana.com/address/8BCTGtapS38S9Q9RUbDcYeTW88MA9Cfh2ZhEZYgqYjKv?cluster=devnet) | [🔗 View on Metaplex](https://core.metaplex.com/explorer/8BCTGtapS38S9Q9RUbDcYeTW88MA9Cfh2ZhEZYgqYjKv?env=devnet) | Rare |

> **Note:** All NFTs are deployed on Solana Devnet for testing purposes. Click the links above to view transaction details and NFT metadata on-chain.

---

## 🚀 Features

- **Batch NFT Minting**: Mint multiple NFTs in a single run
- **Metaplex Core Protocol**: Uses the latest Metaplex Core standard
- **Irys Storage**: Decentralized storage for NFT images and metadata
- **TypeScript**: Fully typed codebase for better developer experience
- **Devnet Ready**: Deploy and test on Solana Devnet

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Solana CLI tools (optional, for manual testing)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/zebra0307/solana-token.git
cd nft-mtplcore
```

2. Install dependencies:
```bash
npm install
```

3. Add your NFT images to the `public/` directory

## 🎨 NFT Collection

The current collection includes:
- Johan (Legendary) - Water & Sun Breathing Style
- Super Bear (Legendary) - Animal Hero with Super Strength
- Super Wolf (Rare) - Animal Hero with Speed & Agility
- Johan84 (Mythic) - The King
- BlackSwan (Rare) - Beast Breathing Style

## 📝 Configuration

Edit `src/utilities.ts` to customize your NFT collection:

```typescript
export const ZebraNfts = [
  {
    name: "Your NFT Name",
    imagePath: "./public/your-image.png",
    description: "Your NFT description",
    attributes: [
      { trait_type: "Category", value: "Value" },
      { trait_type: "Rarity", value: "Legendary" },
    ],
  },
  // Add more NFTs...
];
```

## 🚀 Deployment

### Compile TypeScript
```bash
npm run build
# or
npx tsc
```

### Deploy to Devnet
```bash
node dist/mint_nft.js
```

The script will:
1. Create or load your wallet from `src/user_wallet.json`
2. Request an airdrop of 5 SOL (devnet only)
3. Upload images to Irys
4. Upload metadata to Irys
5. Mint NFTs on Solana Devnet

## 🔑 Wallet Management

The project automatically creates a wallet at `src/user_wallet.json` if it doesn't exist.

**⚠️ IMPORTANT**: 
- Never commit wallet files to git
- Keep your private keys secure
- The `.gitignore` file is configured to exclude wallet files

## 🌐 Viewing Your NFTs

After minting, you'll receive links to:
- **Solana Explorer**: View transactions
- **Metaplex Explorer**: View your NFTs

Example:
```
https://core.metaplex.com/explorer/YOUR_NFT_ADDRESS?env=devnet
```

## 📁 Project Structure

```
nft-mtplcore/
├── src/
│   ├── mint_nft.ts           # Main minting script (devnet)
│   ├── mint_nft_localhost.ts # Localhost version (not functional with Irys)
│   └── utilities.ts          # Helper functions and NFT data
├── public/                   # NFT images directory
│   ├── Johan108.png
│   ├── SuperBear.png
│   ├── SuperWolf.png
│   ├── Johan84.png
│   └── BlackSwan.png
├── dist/                     # Compiled JavaScript files
├── package.json              # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🔧 Development

### Build
```bash
npm run build
```

### Type Check
```bash
npx tsc --noEmit
```

## 📚 Tech Stack

- **Blockchain**: Solana
- **NFT Standard**: Metaplex Core
- **Storage**: Irys (Decentralized storage)
- **Language**: TypeScript
- **Package Manager**: npm

### Key Dependencies
- `@metaplex-foundation/mpl-core` - Metaplex Core protocol
- `@metaplex-foundation/umi` - Unified Metaplex Interface
- `@metaplex-foundation/umi-bundle-defaults` - UMI bundle
- `@metaplex-foundation/umi-uploader-irys` - Irys uploader

## ⚠️ Important Notes

- **Localhost Limitation**: The Irys uploader requires devnet/mainnet connection. Local testing with `mint_nft_localhost.ts` will not work for image/metadata uploads.
- **Devnet Airdrops**: Devnet SOL is free but rate-limited. If airdrops fail, try again later or use [SolFaucet](https://solfaucet.com/).
- **Network**: Currently configured for Solana Devnet

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🔗 Resources

- [Solana Docs](https://docs.solana.com/)
- [Metaplex Core Docs](https://developers.metaplex.com/core)
- [Irys Documentation](https://docs.irys.xyz/)
- [Solana Devnet Faucet](https://faucet.solana.com/)


---