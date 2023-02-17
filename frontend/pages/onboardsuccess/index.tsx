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
  
  const OnboardSuccess = () => {
    return (
      <div className="about">
        <Container maxW="80%" centerContent>
  
          <br /><br /><br />
            <Text as={'span'} color={'gray.600'} fontWeight={500} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
            <Text as={'span'} fontWeight={700} color={'green.400'}>Success</Text>, You will be Onboarded after a short review by the DELG adminstration.
            </Text>

            <br /><br /><br />
            
        </Container>
        
      </div>
    );
  };
  
  export default OnboardSuccess;
  