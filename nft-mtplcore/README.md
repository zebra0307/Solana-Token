# NFT Metaplex Core Project

A Solana blockchain project for creating and managing NFTs (Non-Fungible Tokens) and fungible tokens using the Metaplex Token Metadata standard.

## 📖 About NFTs

**NFT (Non-Fungible Token)** is a unique digital asset stored on the blockchain that represents ownership of a specific item or piece of content. Unlike cryptocurrencies (fungible tokens), each NFT has unique properties and cannot be exchanged on a one-to-one basis.

### Use Cases:
- Digital art and collectibles
- Gaming assets
- Music and media rights
- Domain names
- Event tickets
- Identity verification

## 🚀 Project Overview

This project demonstrates how to:
1. **Generate Solana wallets** - Create keypairs and secure private keys
2. **Request airdrops** - Get test SOL on devnet for transactions
3. **Mint tokens** - Create fungible tokens with metadata using Metaplex standards
4. **Store metadata** - Link tokens to off-chain metadata (images, descriptions, etc.)

## 🎯 Live Demo - Deployed Token

### ✅ Successfully Deployed on Solana Devnet!

**Token Name:** Johan108  
**Symbol:** JO  
**Token Address:** `4yLvQGM2Y4vgTX4LN5XpZi8Z41W3gqRwFzLgxbfsgzYu`

#### Token Details:
- 💰 **Current Supply:** 1,000,000 tokens
- 🔢 **Decimals:** 8
- 🔑 **Mint Authority:** `FsBvAweSK7wRJYhTRvjejENNt6kGXiPCzb6gPq5HWo8a`
- ❄️ **Freeze Authority:** `FsBvAweSK7wRJYhTRvjejENNt6kGXiPCzb6gPq5HWo8a`

#### 🔍 View on Solana Explorer:
**[👉 View Token on Solana Explorer (Devnet)](https://explorer.solana.com/address/4yLvQGM2Y4vgTX4LN5XpZi8Z41W3gqRwFzLgxbfsgzYu?cluster=devnet)**

#### Transaction History:
- ✅ **Creation Transaction:** [4whdfqKZiDuNnWncb2Tj3qKMWtHCaXSLW5NKBhEe1tJxWdiJV8cvHEM9t4UaTKBZMKv4aRsDxBx6mVAAktefyXUn](https://explorer.solana.com/tx/4whdfqKZiDuNnWncb2Tj3qKMWtHCaXSLW5NKBhEe1tJxWdiJV8cvHEM9t4UaTKBZMKv4aRsDxBx6mVAAktefyXUn?cluster=devnet)
- 📦 **Block:** 420,477,470
- ⏰ **Timestamp:** Nov 9, 2025 at 22:51:45 UTC

> **Note:** This is a demonstration token deployed on Solana Devnet for testing purposes. Devnet tokens have no real-world value.

## 📦 Dependencies

### Core Dependencies

- **@solana/web3.js** (v1.x)
  - Official Solana JavaScript SDK
  - Handles blockchain connections, transactions, and keypair management
  - Provides RPC client for interacting with Solana nodes

- **@metaplex-foundation/umi** (v1.4.1)
  - Unified framework for Solana programs
  - Provides common utilities for signers, transactions, and RPC operations
  - Simplifies blockchain interactions with a consistent API

- **@metaplex-foundation/umi-bundle-defaults** (v1.4.1)
  - Default bundle for Umi framework
  - Includes standard plugins and configurations
  - Quick setup for common Solana development patterns

- **@metaplex-foundation/mpl-token-metadata** (v3.4.0)
  - Metaplex Token Metadata program client
  - Enables creation of SPL tokens with rich metadata
  - Supports both fungible and non-fungible token standards
  - Handles token creation, minting, and metadata management

- **@metaplex-foundation/mpl-inscription** (v0.8.1)
  - Metaplex inscription standard for on-chain data
  - Allows storing data directly on Solana blockchain
  - Useful for permanent, immutable records

- **bs58** (v6.0.0)
  - Base58 encoding/decoding library
  - Used for encoding Solana private keys
  - Standard format for Solana addresses and keys

### Development Dependencies

- **@types/node** (v24.10.0)
  - TypeScript type definitions for Node.js
  - Enables proper typing for fs, path, and other Node.js modules

## 📁 Project Structure

```
nft-mtplcore/
├── wallet.ts          # Wallet generation and airdrop script
├── mint.ts            # Token minting with metadata
├── secretKey.json     # Generated wallet private key (DO NOT SHARE!)
├── token.json         # Token metadata configuration
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # This file
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- TypeScript (`ts-node` for running TypeScript files)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd nft-mtplcore
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Install TypeScript globally (if not already installed):**
   ```bash
   npm install -g typescript ts-node
   ```

## 📝 Usage

### 1. Generate a Wallet

Creates a new Solana keypair and requests an airdrop of 1 SOL on devnet:

```bash
ts-node wallet.ts
```

**Output:**
- Public key (wallet address)
- Private key (base58 encoded)
- `secretKey.json` file with private key array

⚠️ **Important:** Keep your `secretKey.json` safe and never share it!

### 2. Mint Tokens

Creates and mints fungible tokens with metadata:

```bash
ts-node mint.ts
```

**Configuration:**
Edit the metadata in `mint.ts`:
```typescript
const metadata = {
    name: "Your Token Name",
    symbol: "SYMBOL",
    uri: "https://your-metadata-uri.com/metadata.json"
}
```

**Features:**
- Creates a new mint account
- Mints specified amount of tokens
- Attaches metadata (name, symbol, URI)
- Sets decimals and initial supply

## 🌐 Networks

### Devnet (Default)
- Used for testing
- Free SOL via airdrops
- Endpoint: `https://api.devnet.solana.com`

### Mainnet Beta (Production)
- Real SOL required
- Endpoint: `https://api.mainnet-beta.solana.com`

To switch networks, update the endpoint in the TypeScript files.

## 📚 Key Concepts

### Token Standards

- **Fungible Tokens:** Identical and interchangeable (like cryptocurrency)
- **Non-Fungible Tokens (NFTs):** Unique and non-interchangeable

### Metaplex Metadata

Metaplex provides a standard for associating metadata with Solana tokens:
- **On-chain metadata:** Name, symbol, URI
- **Off-chain metadata:** Images, descriptions, attributes (stored via URI)

### Token Decimals

- Defines the smallest unit of the token
- Example: 8 decimals = 1 token = 100,000,000 base units
- Similar to how 1 SOL = 1,000,000,000 lamports

## 🔒 Security Best Practices

1. **Never commit private keys** to version control
2. **Use environment variables** for sensitive data in production
3. **Keep `secretKey.json` secure** and backed up
4. **Test on devnet** before deploying to mainnet
5. **Audit smart contracts** before handling real funds
6. **Use hardware wallets** for significant amounts

## 🐛 Troubleshooting

### Common Errors

**"Importing a JSON file requires type attribute"**
- Ensure you have `with { type: "json" }` when importing JSON
- Example: `import secret from './secretKey.json' with { type: "json" };`

**"Insufficient funds"**
- Run `wallet.ts` to get a devnet airdrop
- Ensure you're connected to devnet, not mainnet

**"Module not found"**
- Run `yarn install` to install all dependencies
- Check that `"type": "module"` is in package.json

## 📖 Resources

- [Solana Documentation](https://docs.solana.com/)
- [Metaplex Documentation](https://docs.metaplex.com/)
- [Solana Cookbook](https://solanacookbook.com/)
- [Token Metadata Standard](https://docs.metaplex.com/programs/token-metadata/)

## 📄 License

MIT


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---
