import { useRouter } from "next/router";
import React from "react";
const { ethers } = require("ethers");
// import { PUBLISHER_NFT_ABI } from "../abis/PublisherNft";
// import { DATALINK_ABI } from "../abis/Datalink";

type MetamaskMaskProviderValues = {
  address: string | null;
  contractPublisher: string | null;
  setAddress: () => void;
  disconnect: () => void;
};
const MetamaskContext = React.createContext<MetamaskMaskProviderValues | null>(
  null
);
export const useWallet = () => {
  const context = React.useContext(MetamaskContext);
  if (!context) {
    throw new Error("useWallet must be used within a MetamaskProvider");
  }
  return context;
};
export const MetamaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [address, setAddress] = React.useState<string | null>(null);
  const [contractPublisher, setContractPublisher] = React.useState<
    string | null
  >(null);
  React.useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAddress(window.ethereum.selectedAddress);
      handleSetPublisherContract();
    }
  }, []);
  React.useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        const changedAddress = accounts[0] ?? null;
        if (!changedAddress) {
          setAddress(null);
          return;
        }
        setAddress(changedAddress);
      });
    }
  }, [router]);
  const handleSetAddress = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: string[]) => {
          setAddress(result[0]);
          handleSetPublisherContract();
          router.push("/dashboard");
        });
    }
  };
  const handleSetPublisherContract = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      if (chainId == "3141") {
        // const deployedPublisherContract =
        //   "0x7bfbD50D127c3e3e29A61Badf083F5CE2A0D5170";
        const deployedPublisherContract =
          "0x33b4c27Bb4D467f3a7AA806162E5211B7507A42c";
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          deployedPublisherContract,
          DATALINK_ABI,
          signer
        );
        setContractPublisher(contract);
        getAllNFTS(contract);
      }
    }
  };

  const getAllNFTS = async (any: contract) => {
    const temp = [];
    if (contractPublisher) {
      const res = await contractPublisher.getAllNfts();
      console.log(
        "🚀 ~ file: HomeGallery.js ~ line 33 ~ getFundraisers ~ res",
        res
      );

      // for (let i = 0; i < res.length; i++) {
      //   let obj = {}
      //   // data from smart contract
      //   const organizer = res[i][4]
      //   const totalDonations = res[i]['totalDonations'].toString()
      //   const fundraiserId = res[i].id.toString()

      //   // fetchs data from nftStorage
      //   const nftStorageURL = res[i][1]
      //   let getNFTStorageData = await fetch(nftStorageURL)
      //   let fundraiserData = await getNFTStorageData.json()

      //   //  fundraiser data
      //   const img = getImage(fundraiserData.image)
      //   // gets data from nftStorage
      //   const data = JSON.parse(fundraiserData.description)
      //   // builds fundraiser data
      //   obj.fundraiserId = fundraiserId
      //   obj.organizer = organizer
      //   obj.totalDonations = totalDonations
      //   obj.title = fundraiserData.name
      //   obj.image = img
      //   obj.description = data.description
      //   obj.category = data.category
      //   obj.targetAmmount = data.targetAmmount
      //   obj.creationDate = data.creationDate
      //   temp.push(obj)
      // }
    }

    // setData(temp)
  };

  const handleDisconnect = () => {
    setAddress(null);
    if (router.pathname.startsWith("/dashboard")) return router.push("/");
  };
  return (
    <MetamaskContext.Provider
      value={{
        address,
        contractPublisher,
        setAddress: handleSetAddress,
        disconnect: handleDisconnect,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};