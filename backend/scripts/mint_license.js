require("dotenv").config()
const API_URL = process.env.ALCHEMY_API_URL_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const web3 = createAlchemyWeb3(API_URL)


const contract = require("../artifacts/contracts/LicenseNFT.sol/LicenseNFT.json")
console.log(JSON.stringify(contract.abi))

const contractAddress = "0xE4cADbeC21C4F3A6C03C98dB3D404f83e5aa59df"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)


async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce


//the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  }

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your license transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log(" Promise failed:", err)
    })
}

//mints DEL, License NFT with the payload from license-nft.json
mintNFT("ipfs://QmSkMvdR973oKibXAbVFk6vkjdhgVeRpLpX1hrGtUSeDbq")