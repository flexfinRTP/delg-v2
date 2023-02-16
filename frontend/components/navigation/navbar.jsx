import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import {
	Box,
	Flex,
	Link,
	Button,
	Menu,
	useColorModeValue,
	Stack,
	useColorMode,
  } from "@chakra-ui/react";
  import DEL from "../../public/del.jpg";
  import Image from "next/image";
  import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();

	return (
			<Box
			  bg={useColorModeValue("gray.100", "gray.900")}
			  px={4}
			  marginBottom={20}
			>
			  <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<Box>
				  <Link
					href="/"
				  >
					<Image src={DEL} alt="logo" width={60} height={60} />
				  </Link>
				</Box>
		
				<Flex>
				  <Stack
					direction={"row"}
					spacing={7}
					paddingRight={2}
					display="flex"
					alignItems="center"
				  >
					{!router.pathname.startsWith("/dashboard") && (
					  <>
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/dao">Join The DELG</Link>
						<Link href="/dashboard/manage">Manage</Link>
						<Link href="/dashboard/create-nft">Create</Link>
						<Link href="/memdashboard">NFT Gallery</Link>
						{/* <Link href="/dashboard/verify">Verify</Link>
						<Link href="/rewards">Rewards</Link> */}
					  </>
					)}

					<Box px={20}>
						<Menu>
							<ConnectButton></ConnectButton>
						</Menu>
					</Box>
				  </Stack>
				</Flex>
			  </Flex>
			</Box>

	);
}
