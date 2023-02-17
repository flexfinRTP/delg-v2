require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

const { ALCHEMY_API_URL_KEY, PRIVATE_KEY } = process.env;

module.exports = {
	solidity: "0.8.9",
	defaultNetwork: "polygon_mumbai",
	networks: {
		hardhat: {},
		polygon_mumbai: {
			url: ALCHEMY_API_URL_KEY,
			accounts: [`0x${PRIVATE_KEY}`]
		}
		// MATIC_MAINNET: {
		// 	url: ALCHEMY_API_URL_KEY,
		// 	accounts: [`0x${PRIVATE_KEY}`]
		// }
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}