# 🎨 Metaplex Core NFT Collection

NFT project built with **Metaplex Core**.

## 🔗 Live NFTs on Solana Devnet

### 📦 Collection
**Address:** `DBSnCXmU1DRgkEuTTrFedX8Jzo7CJjhSsu45bH7DEXHv`  
🔍 [**View Collection on Solana Explorer**](https://explorer.solana.com/address/DBSnCXmU1DRgkEuTTrFedX8Jzo7CJjhSsu45bH7DEXHv?cluster=devnet)

### 🖼️ Minted NFTs

| # | NFT Name | Address | Explorer Link |
|---|----------|---------|---------------|
| 1 | **Johan84** | `8KgRD3u2WD1TK2URiExQtjaZeFFURtFficntGmPzTj1v` | [View →](https://explorer.solana.com/address/8KgRD3u2WD1TK2URiExQtjaZeFFURtFficntGmPzTj1v?cluster=devnet) |
| 2 | **BlackSwans** | `73a3gS1Tooa6G3qPBv2ZTnefquwonzpsDUFs3aj6Ysqx` | [View →](https://explorer.solana.com/address/73a3gS1Tooa6G3qPBv2ZTnefquwonzpsDUFs3aj6Ysqx?cluster=devnet) |
| 3 | **Johan108** | `CkVJhum4assT6LH5ZvwA19RNbTJChgjwSMRyfF17HuNQ` | [View →](https://explorer.solana.com/address/CkVJhum4assT6LH5ZvwA19RNbTJChgjwSMRyfF17HuNQ?cluster=devnet) |

**Wallet Address:** `FsBvAweSK7wRJYhTRvjejENNt6kGXiPCzb6gPq5HWo8a`

---

## 🚀 What is Metaplex Core?

**Metaplex Core** is the revolutionary new NFT standard for Solana, designed to replace the traditional Token Metadata program with a more efficient, flexible, and powerful solution.

### ✨ Key Features

#### 1. **Ultra-Low Cost** 💰
- **80% cheaper** than traditional Token Metadata NFTs
- Reduced rent costs through optimized data structure
- Lower transaction fees for minting and transfers

#### 2. **Built-in Royalty Enforcement** 🔒
- Royalties enforced at the protocol level
- No marketplace bypassing
- Automatic creator royalty payments
- Configurable royalty percentages

#### 3. **Plugin Architecture** 🔌
- Extensible design with modular plugins
- Add custom functionality without core changes
- Built-in plugins: Royalties, Freeze, Burn, Transfer
- Community-created plugins support

#### 4. **Simplified Asset Management** 📦
- Single account per NFT (vs. multiple accounts in Token Metadata)
- Easier to query and manage
- Reduced blockchain bloat
- Faster indexing and retrieval

#### 5. **Native Collections** 🎯
- First-class collection support
- Efficient collection verification
- Batch operations on collections
- Built-in collection authority management

#### 6. **Enhanced Performance** ⚡
- Optimized for speed and efficiency
- Lower compute unit consumption
- Faster transaction confirmation
- Better scalability for large collections

#### 7. **Backward Compatible** 🔄
- Works with existing Solana infrastructure
- Compatible with major marketplaces
- Smooth migration path from Token Metadata
- Standard Solana wallet support

---

## 📋 Project Overview

This project demonstrates:
- ✅ Creating a Metaplex Core NFT collection
- ✅ Minting multiple NFTs to the collection
- ✅ Storing metadata on IPFS
- ✅ Querying NFTs by owner
- ✅ Deploying to Solana devnet

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **@metaplex-foundation/mpl-core** | ^1.7.0 | Metaplex Core program SDK |
| **@metaplex-foundation/umi** | ^1.4.1 | Unified Metaplex framework |
| **@solana/web3.js** | ^1.x | Solana JavaScript SDK |
| **TypeScript** | ^5.9.3 | Type-safe development |
| **Node.js** | v20+ | Runtime environment |

---

## 📁 Project Structure

```
nft-mplcore/
├── app.ts                 # Main NFT deployment script
├── johan84.json           # Metadata for Johan84 NFT
├── BlackSwans.json        # Metadata for BlackSwans NFT
├── johan108.json          # Metadata for Johan108 NFT
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🚀 Quick Start

### Prerequisites

```bash
# Node.js 16+ required
node --version

# Install Yarn
npm install -g yarn

# Install TypeScript tools
npm install -g typescript ts-node
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zebra0307/Solana-Token.git
   cd Solana-Token/nft-mplcore
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the deployment script**
   ```bash
   ts-node app.ts
   ```

---

## 💻 Code Walkthrough

### 1. Initialize Umi Instance
```typescript
const umi = createUmi('https://api.devnet.solana.com').use(mplCore())
```
- Connects to Solana devnet
- Registers Metaplex Core plugin

### 2. Create Collection
```typescript
await createCollectionV1(umi, {
    name: 'Johan Collection',
    uri: 'metadata-uri',
    collection: collectionAddress,
    updateAuthority: collectionUpdateAuthority.publicKey,
}).sendAndConfirm(umi, txConfig)
```
- Creates a new NFT collection
- Sets collection metadata and authority

### 3. Mint NFTs
```typescript
await createV1(umi, {
    name: 'Johan84',
    uri: 'ipfs://...',
    asset: asset1,
}).sendAndConfirm(umi, txConfig)
```
- Mints individual NFTs
- Links metadata from IPFS
- Assigns to the collection

### 4. Query NFTs
```typescript
const assets = await getAssetV1GpaBuilder(umi)
    .whereField('key', Key.AssetV1)
    .whereField('owner', payer.publicKey)
    .getDeserialized()
```
- Fetches all NFTs owned by wallet
- Uses Solana's getProgramAccounts

---

## 🌐 Networks

### Devnet (Current)
- **Purpose:** Testing and development
- **Endpoint:** `https://api.devnet.solana.com`
- **Explorer:** [Solana Explorer - Devnet](https://explorer.solana.com/?cluster=devnet)
- **Faucet:** Free SOL airdrops available

### Mainnet Beta (Production)
- **Purpose:** Live production environment
- **Endpoint:** `https://api.mainnet-beta.solana.com`
- **Explorer:** [Solana Explorer - Mainnet](https://explorer.solana.com/)
- **Cost:** Real SOL required

---

## 🔐 Security Best Practices

1. **Never commit private keys** to version control
2. **Use environment variables** for sensitive data in production
3. **Test on devnet** before deploying to mainnet
4. **Audit all smart contracts** for production use
5. **Use hardware wallets** for significant value
6. **Keep dependencies updated** for security patches
7. **Validate all metadata URIs** before minting

---

## 📖 Learn More

### Official Documentation
- [Metaplex Core Docs](https://developers.metaplex.com/core)
- [Solana Documentation](https://docs.solana.com/)
- [Umi Framework](https://github.com/metaplex-foundation/umi)


## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](../LICENSE) file for details

---

## 🐛 Troubleshooting

### Common Issues

**"Insufficient funds"**
- Get devnet SOL: `solana airdrop 1 <your-address> --url devnet`
- Or use [Solana Faucet](https://faucet.solana.com)

**"Transaction failed"**
- Check your devnet connection
- Verify wallet has enough SOL for rent
- Ensure metadata URIs are accessible

**"Module not found"**
- Run `yarn install` to install dependencies
- Check Node.js version (v16+ required)

---

🌟 Star this repo if you found it helpful!
