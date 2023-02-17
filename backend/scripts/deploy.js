const main = async () => {
    const nftContractFactory = await ethers.getContractFactory("ETHNFT"); // compiles contract (artifacts)
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed(); // wait till contract is mined
    console.log("Contract deployed to: ", nftContract.address);

    //call makenft function
    let txn = await nftContract.makeNFT()
    //wait for transaction to be mined
    await txn.wait();
    console.log("Minted NFT #1")

    //call makenft function a 2nd time for incr test
    // txn = await nftContract.makeNFT()
    // console.log("Minted NFT #2")

    await txn.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain(); 