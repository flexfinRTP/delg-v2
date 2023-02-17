import {
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
  import Image from "next/image";
  import { useRouter } from "next/router";
  
  const StorageDealSuccess = () => {
    const router = useRouter();

    return (
      <div className="about">
  
        <Container maxW="80%" centerContent>
  
          <br /><br /><br />
            <Text as={'span'} color={'gray.600'} fontWeight={500} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
              <Text as={'span'} fontWeight={700} color={'green.400'}>Success</Text>
            , Your storage plan was created. Start Tokenizing data 
              <Text onClick={() => router.push("/dashboard/create-nft")} as={'span'} fontWeight={700} color={'green.400'} _hover={{ color: "green.600" }}> right now.
              </Text>
            </Text>

            <br /><br /><br />
          
        </Container>

      </div>
    );
  };
  
  export default StorageDealSuccess;
  