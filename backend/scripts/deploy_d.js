async function main() {
    const LicenseNFT = await ethers.getContractFactory("LicenseNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const licenseNFT = await LicenseNFT.deploy()
    await licenseNFT.deployed()
    console.log("licenseNFT Contract deployed to address:", licenseNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  