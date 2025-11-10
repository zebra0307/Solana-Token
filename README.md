# 🎨 Solana Token & NFT Projects

A comprehensive collection of Solana blockchain projects demonstrating various token standards, NFT implementations, and digital asset management techniques.

## 📚 Overview

This repository contains multiple projects showcasing different approaches to creating and managing tokens and NFTs on the Solana blockchain. Each project focuses on specific use cases, token standards, and Metaplex programs.

## 🗂️ Folder Structure

```
solana-token/
├── fungible-token-mpl/    # Metaplex Token Metadata - Fungible Tokens
├── nft-mplcore/           # Metaplex Core NFTs (Latest Standard)
├── nft-irys/              # NFT Minting with Irys Storage
├── nft-candy-machine/     # [Upcoming] Candy Machine v3 NFT Drops
├── nft-compressed/        # [Upcoming] Compressed NFTs (cNFTs)
├── nft-programmable/      # [Upcoming] Programmable NFTs (pNFTs)
└── README.md              # This file
```

---

## 📦 Current Projects

### 1. **fungible-token-mpl** - Metaplex Token Metadata (Fungible Tokens)
> **Status:** ✅ Complete  
> **Focus:** Fungible Tokens with Metadata

**Description:**  
Implementation of fungible tokens using the Metaplex Token Metadata standard. This project demonstrates wallet generation, token minting, and metadata attachment.

**Deployed Token:**
- **Name:** Johan108
- **Symbol:** JO
- **Address:** `4yLvQGH2Y4vgTX4LN5Xpzi8Z41w3gqRwFzLgxb5rsgzYu`
- **Supply:** 1,000,000 tokens
- **Explorer:** [View on Solana](https://explorer.solana.com/address/4yLvQGH2Y4vgTX4LN5Xpzi8Z41w3gqRwFzLgxb5rsgzYu?cluster=devnet)

**Key Features:**
- 🔑 Wallet generation and keypair management
- 💰 Devnet SOL airdrops for testing
- 🪙 Fungible token creation with metadata
- 📝 SPL Token with custom name, symbol, and URI
- 🎯 Token decimals and supply management

**Technologies:**
- `@metaplex-foundation/mpl-token-metadata`
- `@metaplex-foundation/umi`
- `@solana/web3.js`

**Use Cases:**
- Cryptocurrency tokens
- Utility tokens
- Governance tokens
- Reward tokens

**Learn More:** [fungible-token-mpl/README.md](./fungible-token-mpl/README.md)

---

### 2. **nft-mplcore** - Metaplex Core NFTs
> **Status:** ✅ Complete  
> **Focus:** New Metaplex Core NFT Standard

**Description:**  
Implementation of NFTs using the latest Metaplex Core standard - the most efficient NFT protocol on Solana with built-in features and lower costs.

**Deployed NFTs:**
- **Collection:** `Bg6Y99hQmU1LjKmrsqjVfeR1JnbSBpiDfho8U8RCDKoo`
- **NFT 1 (Johan84):** `EX7MZdinBRSV9cs2dDcdyB3kpJWKKJpiETmPVFF5B5tj`
- **NFT 2 (BlackSwans):** `CGfCLi5Mmf7mcdVE9y6xgFXhcky2dhSvyX8g65wLqecZ`
- **NFT 3 (Johan108):** `7NwhB1w79QPCwYNPgQs25pNHNt5gXhGm8e3fvkEfLovY`

🔗 [View Collection on Explorer](https://explorer.solana.com/address/Bg6Y99hQmU1LjKmrsqjVfeR1JnbSBpiDfho8U8RCDKoo?cluster=devnet)

**Key Features:**
- ⚡ Ultra-efficient NFT standard (lower cost than Token Metadata)
- 🔒 Built-in royalty enforcement
- 📦 On-chain collections
- 🔌 Extensible plugin system
- 🎨 Simplified NFT creation

**Technologies:**
- `@metaplex-foundation/mpl-core`
- Core Program (CoRE)
- `@metaplex-foundation/umi`

**Use Cases:**
- Digital art collections
- Gaming assets
- Membership tokens
- Profile picture (PFP) projects

**Learn More:** [nft-mplcore/README.md](./nft-mplcore/README.md)

---

### 3. **nft-irys** - NFT Minting with Irys Storage
> **Status:** ✅ Complete  
> **Focus:** Batch NFT Minting with Decentralized Storage

**Description:**  
TypeScript-based NFT minting project using Metaplex Core protocol with images and metadata stored on Irys (formerly Bundlr) for permanent, decentralized storage.

**Deployed NFTs:**
- **Johan** (Legendary): `CCHqMUafVg6ZuXqZMwuxR55oWMJctXFgB2mcEyHS69Di`
- **Super Bear** (Legendary): `tJ8QfR71s5ipQGFh1ATEpmeKqPFzkWHPaG84F4tzmD4`
- **Super Wolf** (Rare): `6q4dP3PHbDp2kroPwjUnobGFyo2djoakYN1qX411EChG`
- **Johan84** (Mythic): `HhNvPJcgGwRf6iVW5k7misPSiJLimo4r4gSTLyNFdh3z`
- **BlackSwan** (Rare): `8BCTGtapS38S9Q9RUbDcYeTW88MA9Cfh2ZhEZYgqYjKv`

🔗 [View NFTs on Metaplex Explorer](https://core.metaplex.com/explorer/?env=devnet)

**Key Features:**
- 📸 Batch NFT minting (multiple NFTs in one run)
- ☁️ Irys decentralized storage for images and metadata
- 🎨 Custom attributes and rarity levels
- 📦 Collection management
- 🔄 Fully automated minting pipeline

**Technologies:**
- `@metaplex-foundation/mpl-core`
- `@metaplex-foundation/umi-uploader-irys`
- Irys (Decentralized storage)
- TypeScript

**Use Cases:**
- Art collections with IPFS-like storage
- Gaming NFTs with permanent assets
- Collectibles with rich metadata
- Large-scale NFT projects

**Learn More:** [nft-irys/README.md](./nft-irys/README.md)

---

## 🚀 Upcoming Projects

### 4. **nft-candy-machine** - Candy Machine v3
> **Status:** 🔜 Coming Soon  
> **Focus:** NFT Minting & Distribution

**Planned Features:**
- Automated NFT minting at scale
- Whitelist and public mint phases
- Customizable mint pricing

---

### 5. **nft-compressed** - Compressed NFTs (cNFTs)
> **Status:** 🔜 Coming Soon  
> **Focus:** Cost-Effective NFTs at Scale

**Planned Features:**
- State compression using Merkle trees
- Drastically reduced minting costs

---

### 6. **nft-programmable** - Programmable NFTs (pNFTs)
> **Status:** 🔜 Coming Soon  
> **Focus:** NFTs with Advanced Rules

**Planned Features:**
- Rule sets for transfers
- Creator-enforced royalties

---

## 🎯 NFT Types Comparison

| Type | Cost | Use Case | Transferable | Royalties |
|------|------|----------|--------------|-----------|
| **Token Metadata** | Medium | Fungible tokens | ✅ Yes | ⚠️ Optional |
| **Core NFT** | Low | Standard NFTs | ✅ Yes | ✅ Enforced |
| **Compressed NFT** | Very Low | Mass distribution | ✅ Yes | ⚠️ Limited |
| **Programmable NFT** | Medium | Rule-based assets | 🔒 Conditional | ✅ Enforced |
| **Candy Machine** | Variable | Minting/Drops | ✅ Yes | ✅ Enforced |

---

## 🛠️ Getting Started

### Prerequisites
```bash
# Install Node.js (v16+)
node --version

# Install Yarn
npm install -g yarn

# Install Solana CLI
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"

# Install TypeScript tools
npm install -g typescript ts-node
```

### Quick Start
1. **Clone the repository:**
   ```bash
   git clone https://github.com/zebra0307/solana-token.git
   cd solana-token
   ```

2. **Choose a project:**
   ```bash
   cd fungible-token-mpl  # Fungible tokens
   cd nft-mplcore         # Metaplex Core NFTs
   cd nft-irys            # NFTs with Irys storage
   ```

3. **Install dependencies:**
   ```bash
   yarn install
   ```

4. **Follow project-specific README:**
   Each project has its own README with detailed instructions.

---

## 🌐 Solana Networks

### Devnet (Development)
- **Purpose:** Testing and development
- **SOL:** Free via airdrops
- **Endpoint:** `https://api.devnet.solana.com`

### Mainnet Beta (Production)
- **Purpose:** Live production environment
- **SOL:** Real value, must purchase
- **Endpoint:** `https://api.mainnet-beta.solana.com`

⚠️ **Always test on Devnet first!**

---

## 📖 Learning Resources

### Official Documentation
- [Solana Docs](https://docs.solana.com/)
- [Metaplex Docs](https://docs.metaplex.com/)
- [Solana Cookbook](https://solanacookbook.com/)

### Standards & Programs
- [Token Metadata Standard](https://docs.metaplex.com/programs/token-metadata/)
- [Core Standard](https://developers.metaplex.com/core)
- [Irys Documentation](https://docs.irys.xyz/)

---

## 🗺️ Roadmap

- [x] **Fungible Token Metadata** (fungible-token-mpl)
- [x] **Metaplex Core NFTs** (nft-mplcore) 
- [x] **NFT with Irys Storage** (nft-irys)
- [ ] Candy Machine v3 (NFT Drops)
- [ ] Compressed NFTs (cNFTs)
- [ ] Programmable NFTs (pNFTs)
- [ ] NFT Staking mechanisms
- [ ] NFT Marketplace integration

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes 
4. Push to the branch 
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see individual project directories for details.

---

## 💡 Project Goals

This repository aims to:
- Provide **hands-on examples** of Solana token/NFT development
- Showcase **different token standards** and their use cases
- Build a **comprehensive toolkit** for Solana projects

---

## ⚡ Quick Links

| Project | Status | Type | Docs |
|---------|--------|------|------|
| [fungible-token-mpl](./fungible-token-mpl/) | ✅ Complete | Fungible Tokens | [README](./fungible-token-mpl/README.md) |
| [nft-mplcore](./nft-mplcore/) | ✅ Complete | Core NFTs | [README](./nft-mplcore/README.md) |
| [nft-irys](./nft-irys/) | ✅ Complete | NFTs + Irys Storage | [README](./nft-irys/README.md) |
| nft-candy-machine | 🔜 Soon | Minting Drops | Coming Soon |
| nft-compressed | 🔜 Soon | cNFTs | Coming Soon |
| nft-programmable | 🔜 Soon | pNFTs | Coming Soon |

---