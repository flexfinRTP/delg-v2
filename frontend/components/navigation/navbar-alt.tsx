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
import DAL_rvsd from "./DAL_rvsd.png";
import Image from "next/image";
import MetamaskConnectButton from "./MetamaskConnectButton";
import { useRouter } from "next/router";

const Nav: React.FC = () => {
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
            href={router.pathname.startsWith("/dashboard") ? "/dashboard" : "/"}
          >
            <Image src={DAL_rvsd} alt="logo" width={60} height={60} />
          </Link>
        </Box>

        <Flex>
          <Stack
            direction={"row"}
            spacing={7}
            display="flex"
            alignItems="center"
          >
            {!router.pathname.startsWith("/dashboard") && (
              <>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/dao">Join The DAO</Link>
              </>
            )}

            {router.pathname.startsWith("/dashboard") && (
              <>
                {/** TODO: Use a conditional based on user role here to determine what navbar items they see,
                 *   DO NOT create another navbar please :) */}
                <Link href="/">Home</Link>
                <Link href="/dashboard/manage">Manage</Link>
                <Link href="/dashboard/create-nft">Create</Link>
                <Link href="/dashboard/verify">Verify</Link>
                <Link href="/rewards">Rewards</Link>
              </>
            )}

            {/* IMPORTANT: We don't need to support this right now, there's a CSS flash of the light theme anyway */}
            {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}

            <Menu>
              <MetamaskConnectButton />
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
