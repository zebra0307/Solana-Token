import {Keypair, LAMPORTS_PER_SOL, Connection} from "@solana/web3.js"
import * as fs from 'node:fs';
import bs58 from "bs58";

const endpoint = "https://api.devnet.solana.com";
const solanaConnection = new Connection(endpoint);

const keypair = Keypair.generate();
console.log("Public Key: ", keypair.publicKey.toString());

const privateKey = bs58.encode(keypair.secretKey);
console.log("Private Key:", privateKey);

const secret_array = keypair.secretKey.toString().split(",").map(value=>Number(value));
const secret = JSON.stringify(secret_array);

fs.writeFile('secretKey.json', secret, 'utf8', function(err: any){
if (err) throw err;
console.log("SecretKey generated successfully");

});

(async() => {
    const airdrop = solanaConnection.requestAirdrop(
    keypair.publicKey, LAMPORTS_PER_SOL

    )

    try {
        const txId = await airdrop;
        console.log("Airdrop successful", txId);
    }catch (error) {
        console.log(error);
    }


})();