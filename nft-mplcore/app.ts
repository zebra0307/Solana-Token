
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { 
    createV1, 
    mplCore, 
    fetchAssetV1,
    transferV1,
    createCollectionV1, 
    getAssetV1GpaBuilder, 
    Key, 
    updateAuthority, 
    pluginAuthorityPair, 
    ruleSet 
} from '@metaplex-foundation/mpl-core'
import { generateSigner, signerIdentity, sol, createSignerFromKeypair } from '@metaplex-foundation/umi';
import secretKey from '../fungible-token-mpl/secretKey.json' with { type: 'json' };


const umi = createUmi('https://api.devnet.solana.com').use(mplCore())

const asset1 = generateSigner(umi);
const asset2 = generateSigner(umi);
const asset3 = generateSigner(umi);

// Use existing wallet with SOL
const payerKeypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secretKey));
const payer = createSignerFromKeypair(umi, payerKeypair);

umi.use(signerIdentity(payer));

const txConfig = {
    send: { skipPreflight: false },
    confirm: { commitment: 'confirmed' as const },
};


async function main() {
    // 1. Check payer wallet
    console.log('1. Using wallet: ', payer.publicKey.toString());
    const balance = await umi.rpc.getBalance(payer.publicKey);
    console.log('   Wallet balance:', Number(balance.basisPoints) / 1000000000, 'SOL');

    // 2. Create a collection asset
        
        const collectionAddress = generateSigner(umi);
        console.log('2. Creating Collection:', collectionAddress.publicKey.toString());
        const collectionUpdateAuthority = generateSigner(umi);
        await createCollectionV1(umi, {
            name: 'Johan Collection',
            uri: 'https://bronze-reasonable-shrew-534.mypinata.cloud/ipfs/bafkreihdszlhax4maeb33aeoycmvmiiaxlo3psko5kbicuhlbwhj42ztoa',
            collection: collectionAddress,
            updateAuthority: collectionUpdateAuthority.publicKey,
        }).sendAndConfirm(umi, txConfig);
        console.log('   ✅ Collection created successfully!');
    // 3. Create standalone NFT assets (without collection for simplicity)
        console.log('3. Creating NFT Asset 1: Johan84 (standalone)');
        await createV1(umi, {
            name: 'Johan84',                        
            uri: 'https://bronze-reasonable-shrew-534.mypinata.cloud/ipfs/bafkreidsto6czmjniz5t7s7bdgagfpojbobzx6gxhkaokm4skin3vdbk6q',  
            asset: asset1,
        }).sendAndConfirm(umi, txConfig);
        console.log('   ✅ Asset 1 created:', asset1.publicKey.toString());

        console.log('4. Creating NFT Asset 2: BlackSwans (standalone)');
        await createV1(umi, {
            name: 'BlackSwans',                         
            uri: 'https://bronze-reasonable-shrew-534.mypinata.cloud/ipfs/bafkreieoayifqeghwvleyu3fsnvsvfhwcfllepl6mxricfm66w5lo53co4',   
            asset: asset2,
        }).sendAndConfirm(umi, txConfig);
        console.log('   ✅ Asset 2 created:', asset2.publicKey.toString());

        console.log('5. Creating NFT Asset 3: Johan108 (standalone)');
        await createV1(umi, {
            name: 'Johan108',                         
            uri: 'https://bronze-reasonable-shrew-534.mypinata.cloud/ipfs/bafkreihdszlhax4maeb33aeoycmvmiiaxlo3psko5kbicuhlbwhj42ztoa',   
            asset: asset3,
        }).sendAndConfirm(umi, txConfig);
        console.log('   ✅ Asset 3 created:', asset3.publicKey.toString());

    // 6. Fetch assets by owner
        console.log('5. Fetching assets by owner...');
        const assetsByOwner = await getAssetV1GpaBuilder(umi)
            .whereField('key', Key.AssetV1)
            .whereField('owner', payer.publicKey)
            .getDeserialized();

        console.log(`   Found ${assetsByOwner.length} assets owned by wallet`);

        console.log('\n🎉 NFT Deployment Completed Successfully!');
        console.log('\n📋 Deployed Assets Summary:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🏦 Wallet:', payer.publicKey.toString());
        console.log('📦 Collection:', collectionAddress.publicKey.toString());
        console.log('🖼️  NFT 1 (Johan84):', asset1.publicKey.toString());
        console.log('🖼️  NFT 2 (BlackSwans):', asset2.publicKey.toString());
        console.log('🖼️  NFT 3 (Johan108):', asset3.publicKey.toString());
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('\n🔗 View on Solana Explorer (Devnet):');
        console.log(`   Collection: https://explorer.solana.com/address/${collectionAddress.publicKey.toString()}?cluster=devnet`);
        console.log(`   NFT 1: https://explorer.solana.com/address/${asset1.publicKey.toString()}?cluster=devnet`);
        console.log(`   NFT 2: https://explorer.solana.com/address/${asset2.publicKey.toString()}?cluster=devnet`);
        console.log(`   NFT 3: https://explorer.solana.com/address/${asset3.publicKey.toString()}?cluster=devnet`);

}



main().catch(console.error);

