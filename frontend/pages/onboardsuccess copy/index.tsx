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
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import Hero from "@/components/Hero";
  
  const OnboardSuccess = () => {
    return (
      <div className="about">
  
        <Navbar />
  
        <Container maxW="80%" centerContent>
  
          <br /><br /><br />
            <Text as={'span'} color={'gray.600'} fontWeight={500} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
            <Text as={'span'} fontWeight={700} color={'blue.400'}>Success</Text>, You will be Onboarded after a short review by the DAO jury.
            </Text>

            <br /><br /><br />

            
        </Container>
        
        <Footer />
      </div>
    );
  };
  
  export default OnboardSuccess;
  