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
  import agreement from "./agreement.jpg";
  import Image from "next/image";
  
  const Rewards = () => {
    return (
      <div className="about">
  
        <Container maxW="80%" centerContent>
          
          <Card alignItems="center">
                <Image src={''} alt="logo" width={800} height={800} />
          </Card>
  
          <br /><br /><br /><br /><br /><br />
  
        </Container>
  
      </div>
    );
  };
  
  export default Rewards;
  