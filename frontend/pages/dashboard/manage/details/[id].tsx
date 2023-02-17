import { Text, Container, Heading, Box } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import React from "react";

const data = {
  engineerId: "0930023",
  walletId: "0x4BC425f5bA8d950d3C08B668A4a38c4FEF4B575e",
  documentType: "Parks and Recreation",
  name: "Alice Johnson",
  reviewDate: "2022-11-11",
  documentNumber: "D12301230",
  engineeringVerification: "Yes",
} as Record<string, string>;

const Details: React.FC<{ id: string }> = (props) => {
  const { id } = props;

  React.useEffect(() => {
    // use id to fetch data from the blockchain
    // either use a web3 library to fetch the data here or wrap it in a useQuery hook and remove this
  }, []);

  const textLines = Object.keys(data).map((key: string, idx: number) => (
    <Box display="flex" gap={2} key={idx}>
      <Text fontWeight={600}>{(key)}:</Text>
      <Text>{data[key]}</Text>
    </Box>
  ));

  return (
    <>
      <Container>
        <Text color={'green.600'} fontWeight={800} fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>NFT Details</Text>
        <br />
        <Heading marginBottom={10} fontSize={{ base: 'xl', sm: 'xl', md: '2xl' }}>
          NFT/Document Name
        </Heading>
        <Text fontWeight={600} fontSize={20}>City of Austin - Redwood Ave Expansion</Text>
        <br /><br />
        <Box display="flex" flexDirection="column" rowGap={3}>
          {textLines}
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>
) => {
  const id = context.params;

  if (!id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
};

export default Details;
