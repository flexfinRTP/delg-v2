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
import Hero from "../../components/Hero";
import Contact from "../../components/Contact";
import SimpleThreeColumns from "../../components/ThreeColumns";

const About = () => {
  return (
    <div className="about">

      <Hero />

      <Container maxW="80%" centerContent>
        
        <Card alignItems="center">
              <Image src={agreement} alt="logo" width={800} height={800} />
        </Card>

        <br /><br /><br /><br /><br /><br />

        <Contact />

      </Container>

    </div>
  );
};

export default About;
