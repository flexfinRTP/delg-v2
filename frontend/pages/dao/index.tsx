import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import DEL from "../../public/del-r.png";
import a1920 from "../../public/a1920.jpg";
import w79 from "../../public/w79.jpg";

const JoinDao = () => {
  const router = useRouter();

  return (
    <>
        <Container>
          <Image src={DEL} alt='img' width={800} height={800}/>
          <br /><br /><br /><br />
          <Card
            alignItems="center"
            justifyContent="center"
            fontSize="4em"
            padding={0}
            marginTop={0}
            marginBottom={20}
            boxShadow='dark-lg' p='6' rounded='md' bg='white'
            w="100%"
            mx="auto"
          >
          <Heading marginTop={10} marginBottom={10} fontSize="4xl" color="green.600">Join the DEL!</Heading>

          <Box display="flex" columnGap={10} marginBottom={10}>
            <Button
              bg="green"
              color="white"
              alignItems="center"
              justifyContent="center"
              boxShadow='dark-lg' p='6' rounded='lg'
              colorScheme='green' 
              variant='solid'
              onClick={() => router.push("/dao/publisher")}
            >
              Join as Publisher
            </Button>
              {/* TODO: This button should route to a tx to purchase a DAO Member NFT */}
            <Button
              bg="blue"
              color="white"
              alignItems="center"
              justifyContent="center"
              boxShadow='dark-lg' p='6' rounded='lg'
              colorScheme='messenger' 
              variant='solid'
              onClick={() => router.push("/dao")}
            >
              Join as DEL Member
            </Button>
          </Box>
        </Card>
        </Container>

        <br />

        <Container maxWidth='50%' alignItems='center' gap='10'>

        <Card alignItems="center" mx="auto" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
          <Image src={a1920} alt='img' width={800} height={800}/>
          <CardHeader>
            <Heading
              size="lg"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              {" "}
              Right now, engineers must make a separate application using the same information in every state they want to be licensed. 
            </Heading>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              The engineer has to interact with each state licensing agency not just to acquire but also maintain their licenses. 
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              A digital engineering license would be issued once. Details about which states the engineer is licensed in would be associated with the license and accessible to other engineers within the system. 
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              When an engineer wants to become licensed in another state, they would authorize access to their work records and personal information to the licensing agency for approval. Because the records are consistent, the engineer can apply to multiple agencies at the same time. 
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
             This would simplify the process for engineers who need to become licensed quickly for work. 
            </Text>
          </CardHeader>
        </Card>
        
        <br /><br /><br />

        <Card alignItems="center" mx="auto" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
          <Image src={w79} alt='img' width={800} height={800}/>
          <CardHeader>
            <Heading
              size="lg"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              {" "}
              One way to make this work would be to create an NFT that is unique to each engineer. 
            </Heading>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              The issuing organization would be the smart contract that maintains the engineers record. Every instance where the engineer seals a project would be added to the record as a newly minted NFT. 
              The engineer's work portfolio would be a set of NFTs containing meta data for the engineering design that they sealed.
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              As they do more work, their portfolio grows, and people with access to the system can view their experience. The work record would always be current since the NFT updates with each use.
            </Text>
          </CardHeader>
        </Card>
      </Container>
    </>
  );
};

export default JoinDao;
