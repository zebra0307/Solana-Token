# 🎨 Solana Token & NFT Projects

A comprehensive collection of Solana blockchain projects demonstrating various token standards, NFT implementations, and digital asset management techniques.

## 📚 Overview

This repository contains multiple projects showcasing different approaches to creating and managing tokens and NFTs on the Solana blockchain. Each project focuses on specific use cases, token standards, and Metaplex programs.

## 🗂️ Folder Structure

```
solana-token/
├── nft-mtplcore/          # Metaplex Token Metadata - Fungible Tokens
├── nft-core/              # [Upcoming] Metaplex Core NFTs
├── nft-candy-machine/     # [Upcoming] Candy Machine v3 NFT Drops
├── nft-compressed/        # [Upcoming] Compressed NFTs (cNFTs)
├── nft-programmable/      # [Upcoming] Programmable NFTs (pNFTs)
└── README.md              # This file
```

---

## 📦 Current Projects

### 1. **nft-mtplcore** - Metaplex Token Metadata
> **Status:** ✅ Complete  
> **Focus:** Fungible Tokens with Metadata

**Description:**  
Implementation of fungible tokens using the Metaplex Token Metadata standard. This project demonstrates wallet generation, token minting, and metadata attachment.

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

**Learn More:** [nft-mtplcore/README.md](./nft-mtplcore/README.md)

---

## 🚀 Upcoming Projects

### 2. **nft-core** - Metaplex Core NFTs
> **Status:** 🔜 Coming Soon  
> **Focus:** New Core NFT Standard

**Planned Features:**
- Ultra-efficient NFT standard (lower cost)
- Built-in royalty enforcement
- On-chain collections
- Asset plugins and extensions
- Simplified NFT creation

**Technologies:**
- `@metaplex-foundation/mpl-core`
- Core Program (CoRE)

**Use Cases:**
- Digital art collections
- Gaming assets
- Membership tokens
- Profile picture (PFP) projects

---

### 3. **nft-candy-machine** - Candy Machine v3
> **Focus:** NFT Minting & Distribution

---

### 4. **nft-compressed** - Compressed NFTs (cNFTs)
> **Focus:** Cost-Effective NFTs at Scale

---

### 5. **nft-programmable** - Programmable NFTs (pNFTs)
> **Focus:** NFTs with Advanced Rules

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
   cd nft-mtplcore  # Or any other project
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
- [Candy Machine](https://docs.metaplex.com/programs/candy-machine/)
- [Bubblegum (cNFTs)](https://docs.metaplex.com/programs/compression/)

---

## 🗺️ Roadmap

- [x] Token Metadata (Fungible Tokens)
- [ ] Core NFTs (Standard NFTs)
- [ ] Candy Machine v3 (NFT Drops)
- [ ] Compressed NFTs (cNFTs)
- [ ] Programmable NFTs (pNFTs)
- [ ] NFT Staking mechanisms
- [ ] NFT Marketplace integration
- [ ] Cross-program composability examples

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
| [nft-mtplcore](./nft-mtplcore/) | ✅ Complete | Fungible Tokens | [README](./nft-mtplcore/README.md) |
| nft-core | 🔜 Soon | Core NFTs | Coming Soon |
| nft-candy-machine | 🔜 Soon | Minting | Coming Soon |
| nft-compressed | 🔜 Soon | cNFTs | Coming Soon |
| nft-programmable | 🔜 Soon | pNFTs | Coming Soon |

---