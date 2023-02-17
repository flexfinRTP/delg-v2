import { useState, useEffect } from 'react'
import {
  Text,
  Container,
  Heading,
  Input,
  InputGroup,
  FormLabel,
  styled,
  Button,
} from "@chakra-ui/react";
// import { nftContractAddress } from '../config.js'
import { ethers } from 'ethers'
import axios from 'axios'

import NFT from '../../utils/LicenseNFT.json'


const mint = () => {
    const [contract, setContract] = useState(null)
    const [ethers, setEthers] = useState(null)
    const [address, setAddress] = useState(null)
	const [mintedNFT, setMintedNFT] = useState(null)
	const [miningStatus, setMiningStatus] = useState(null)
	const [loadingState, setLoadingState] = useState(0)
	const [txError, setTxError] = useState(null)
	const [currentAccount, setCurrentAccount] = useState('')
	const [correctNetwork, setCorrectNetwork] = useState(false)
    const nftContractAddress = "0xE4cADbeC21C4F3A6C03C98dB3D404f83e5aa59df"

    const [totalSupply, setTotalSupply] = useState(0)

        // // Calling the totalSupply function from our ERC721Enumerable contract
        // contract.methods.totalSupply().call().then((_supply) => {
        //     // Optionally set it to the state to render it using React
        //     setTotalSupply(_supply)
        // }).catch((err) => console.log(err))

        // Checks if wallet is connected
        const checkIfWalletIsConnected = async () => {
		const { ethereum } = window
		if (ethereum) {
			console.log('Got the ethereum obejct: ', ethereum)
		} else {
			console.log('No Wallet found. Connect Wallet')
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' })

		if (accounts.length !== 0) {
			console.log('Found authorized Account: ', accounts[0])
			setCurrentAccount(accounts[0])
		} else {
			console.log('No authorized account found')
		}
	}

    
        function mintNFT(){
            let _price = ethers.utils.toWei("1");
            let encoded = contract.methods.mint().encodeABI()
            let { ethereum } = window

            let tx = {
                from: address,
                to : nftContractAddress,
                data : encoded,
                nonce: "0x00",
                chainId: "80001",
                value: ethers.utils.numberToHex(_price)
            }

            // let txHash = ethereum.request({
            //     method: 'eth_sendTransaction',
            //     params: [tx],
            // }).then((hash) => {
            //     alert("You can now view your transaction with hash: " + hash)
            // }).catch((err) => console.log(err))
            
            // return txHash
        }

	// Calls Metamask to connect wallet on clicking Connect Wallet button
	const connectWallet = async () => {
		try {
			const { ethereum } = window

			// if (!ethereum) {
			// 	console.log('Metamask not detected')
			// 	return
			// }
			// let chainId = await ethereum.request({ method: 'eth_chainId'})
			// console.log('Connected to chain:' + chainId)

			// const rinkebyChainId = '0x4'

			// if (chainId !== rinkebyChainId) {
			// 	alert('You are not connected to the Rinkeby Testnet!')
			// 	return
			// }

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Found account', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

	// Checks if wallet is connected to the correct network
	const checkCorrectNetwork = async () => {
		const { ethereum } = window
		let chainId = await ethereum.request({ method: 'eth_chainId' })
		console.log('Connected to chain:' + chainId)

		// const rinkebyChainId = '0x4'

		// if (chainId !== rinkebyChainId) {
		// 	setCorrectNetwork(false)
		// } else {
		// 	setCorrectNetwork(true)
		// }
	}

	useEffect(() => {
		checkIfWalletIsConnected()
	}, [])

	// Creates transaction to mint NFT on clicking Mint Character button
	const mintLicense = async () => {
		try {
			const { ethereum } = window

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const nftContract = new ethers.Contract(
					nftContractAddress,
					NFT.abi, //this needs the abi from LicenseNFT contract, import above somehow
					signer
				)

				let nftTx = await nftContract.mintNFT()
				console.log('Mining....', nftTx.hash)
				setMiningStatus(0)

				let tx = await nftTx.wait()
				setLoadingState(1)
				console.log('Mined!', tx)
				let event = tx.events[0]
				let value = event.args[2]
				let tokenId = value.toNumber()

				// console.log(
				// 	`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
				// )

				getMintedNFT(tokenId)
			} else {
				console.log("Ethereum object doesn't exist!")
			}
		} catch (error) {
			console.log('Error minting license', error)
			setTxError(error.message)
		}
	}

	// Gets the minted NFT data
	const getMintedNFT = async (tokenId) => {
		try {
			const { ethereum } = window

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const nftContract = new ethers.Contract(
					nftContractAddress,
					NFT.abi,
					signer
				)

				let tokenUri = await nftContract.tokenURI(tokenId)
				let data = await axios.get(tokenUri)
				let meta = data.data

				setMiningStatus(1)
				setMintedNFT(meta.image)
			} else {
				console.log("Ethereum object doesn't exist!")
			}
		} catch (error) {
			console.log(error)
			setTxError(error.message)
		}
	}

	return (
		<div className='flex flex-col items-center pt-32 bg-[#f3f6f4] text-[#6a50aa] min-h-screen'>
            <Container>
				<Button
				className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
				onClick={mintLicense}>Mint License</Button>
                </Container>
                <br /><br />
                <Container>
				<Button
				className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
				onClick={getMintedNFT}>get Minted NFT</Button>
                </Container>
		</div>
	)
}

export default mint