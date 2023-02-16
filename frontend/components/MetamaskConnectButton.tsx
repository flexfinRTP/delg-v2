import React from "react";
import { Button } from "@chakra-ui/react";
import { useWallet } from "../context/MetamaskProvider";
import Link from "next/link";
import { useRouter } from "next/router";

/**
 * Component that renders:
 * - a button that connects to Metamask
 * - a button with the current address when connected and disconnects when clicked
 * - a button that tells the user to install Metamask and opens new tab to Metamask website when clicked
 */

const MetamaskConnectButton: React.FC<{
  style?: React.CSSProperties;
}> = ({ style }) => {
  const router = useRouter();
  const { address, setAddress, disconnect } = useWallet();
  const [metamaskUnavailable, setMetamaskUnavailable] = React.useState(false);
  // const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!window.ethereum) {
      setMetamaskUnavailable(true);
    }
  }, []);

  if (metamaskUnavailable) {
    return (
      <Link href="https://metamask.io/" target="_blank" style={style}>
        <Button style={style}>Install Metamask</Button>
      </Link>
    );
  }

  if (address) {
    console.log("router", router);
    if (!router.pathname.startsWith("/dashboard")) {
      return (
        <Button
          onClick={() => router.push("/dashboard")}
          style={style}
          colorScheme="orange"
        >
          Go To Dashboard
        </Button>
      );
    }

    return (
      <Button
        onClick={disconnect}
        style={style}
        colorScheme={window.ethereum.isMetaMask ? "orange" : "blue"}
      >
        {address}
      </Button>
    );
  }

  return (
    <Button onClick={setAddress} style={style} colorScheme="blue">
      Connect Wallet
    </Button>
  );
};

export default MetamaskConnectButton;
