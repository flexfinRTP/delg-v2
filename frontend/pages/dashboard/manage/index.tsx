import React from "react";
import {
  Text,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import { useWallet } from "@/context/MetamaskProvider";
import { Column, useTable } from "react-table";

type Props = {
  columns: Column<{
    Header: any;
    accessor: any;
  }>[];
  data: {
    nft: any;
    type: any;
    status: any;
    expires: any;
    details: JSX.Element;
    burn: JSX.Element;
  }[];
};

const CustomTable: React.FC<Props> = ({ columns, data }) => {
  const router = useRouter();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableContainer width="100%" mt={6}>
      <Table variant="simple" width="100%" {...getTableProps()}>
        <TableCaption>Harvard Business School Campaigns</TableCaption>
        <Thead>
          <Tr>
            {headerGroups[0].headers.map((col) => (
              <Th key={col.id}>{col.render("Header")}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell, idx) => {
                  switch (cell.column.id) {
                    case "details":
                      return (
                        <Td {...cell.getCellProps()} key={idx}>
                          <Button
                            colorScheme="#f8f8f800"
                            onClick={() =>
                              router.push(`/dashboard/manage/details/1`)
                            }
                          >
                            🔍
                          </Button>
                        </Td>
                      );
                    case "burn":
                      return (
                        <Td {...cell.getCellProps()} key={idx}>
                          <Button
                            colorScheme="#f8f8f800"
                            onClick={() =>
                              router.push(
                                `/dashboard/manage/burn/${cell.row.original.id}`
                              )
                            }
                          >
                            🔥
                          </Button>
                        </Td>
                      );
                    default:
                      return (
                        <Td {...cell.getCellProps()} key={idx}>
                          {cell.render("Cell")}
                        </Td>
                      );
                  }
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Manage = () => {
  const { contractPublisher } = "0x"
  const columns = React.useMemo(
    () => [
      {
        Header: "NFT / Campaign",
        accessor: "nft",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Expires?",
        accessor: "expires",
      },
      {
        Header: "Details",
        accessor: "details",
      },
      {
        Header: "Burn",
        accessor: "burn",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        nft: "Finance Class of 2021",
        type: "Diploma",
        status: "152/174",
        expires: "Soulbound",
        details: <Button colorScheme="#f8f8f800">🔍</Button>,
        burn: <Button colorScheme="#f8f8f800">🔥</Button>,
      },
      {
        nft: "International Business Class of 2021",
        type: "Diploma",
        status: "85/103",
        expires: "Soulbound",
        details: <Button colorScheme="#f8f8f800">🔍</Button>,
        burn: <Button colorScheme="#f8f8f800">🔥</Button>,
      },
      {
        nft: "CPR Fall 2019 Class",
        type: "Certification",
        status: "23/23",
        expires: "December 2024",
        details: <Button colorScheme="#f8f8f800">🔍</Button>,
        burn: <Button colorScheme="#f8f8f800">🔥</Button>,
      },
      {
        nft: "Harvard Class of 1998 Diplomas",
        type: "Diploma",
        status: "2/207",
        expires: "Soulbound",
        details: <Button colorScheme="#f8f8f800">🔍</Button>,
        burn: <Button colorScheme="#f8f8f800">🔥</Button>,
      },
    ],
    []
  );
  const router = useRouter();

  // console.log("____________contractPublisher", contractPublisher);
  // if (!contractPublisher) {
  //   return <div >
  //     <br />
  //     <p style={{ padding: "1em", color: "red", fontWeight:"bolder", fontSize: "28px"}}>Please connect your wallet to the Filecoin Hyperspace Testnet to continue.</p>
  //     <a style={{ padding: "1.5em", color: "blue", fontStyle: "italic", fontWeight:"bold", fontSize: "20px"}} href="https://chainlist.org/chain/3141">Filecoin - Hyperspace testnet RPC and Chain settings | Chainlist</a>
  //   </div>;
  // }

  return (
    <>
      <Box mt={10}>
        <Container maxW="100%">
          <Box bg="green.600" color="white" mb={8}>
            <Text fontSize="6xl" style={{ textAlign: "center" }}>
              DELG Publisher Dashboard
            </Text>
          </Box>
          <Flex>
            <Box p="4">
              <Heading as="h2" size="2xl" color={'green.600'} fontWeight={700}>
                Overview
              </Heading>

              <br /><br />

              <Heading as="h2" size="xl" color={'gray.700'} fontWeight={500}>
                Texas Engineering Institute
              </Heading>
            </Box>
            <Spacer />
            <Box p="4">
              <Button
                marginRight={20}
                size="md"
                height="48px"
                width="200px"
                bg={'green.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'green.500',
                }}
                _focus={{
                  bg: 'green.500',
                }}
                onClick={() => router.push("/dashboard/create-nft")}
              >
                Create NFT
              </Button>
            </Box>
          </Flex>
          <CustomTable columns={columns} data={data} />
        </Container>
      </Box>
    </>
  );
};

export default Manage;
