# 📚 BookChain (SwapSafe)

BookChain is a decentralized platform where students can securely **buy, sell, or exchange books and notes** with **verified ownership on the blockchain**. Powered by Ethereum smart contracts and IPFS for content storage.

---

## 🚀 Features

- ✅ List a book with title and IPFS hash (notes or book file)
- ✅ View all listed books with current owner info
- ✅ Verify ownership of any book on-chain
- ✅ MetaMask wallet integration

---

## ⚙️ Tech Stack

- ⚡ **Frontend**: HTML, Ethers.js
- 🔗 **Blockchain**: Solidity Smart Contract (deployed via Remix IDE)
- 📁 **Storage**: IPFS for book data 
- 🔐 **Wallet**: MetaMask

---

## 📦 Smart Contract

```solidity
function listBook(string memory _title, string memory _ipfsHash) public;
function transferOwnership(uint _bookId, address _newOwner) public;
function bookCount() public view returns (uint);
function books(uint _id) public view returns (string title, string ipfsHash, address owner);
