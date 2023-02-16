import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
    Box,
    Flex,
    Spacer,
    Select,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Tooltip,
    InputGroup,
    styled,
  } from "@chakra-ui/react";
  import Image from "next/image";
  import React, { useState } from "react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { Contract } from "ethers";

  
  const Verify = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);
    const [diplomaVerification, setDiplomaVerification] = useState(null);
    const [transcript, setTranscript] = useState(null);
  
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data: any) => {
      console.log("data: ", data);
      // TODO: Send data to backend or SC, await response and redirect to dashboard
    };
  
    const handleImage = (event: any) => {
      setImage(event.target.files[0]);
      setImageName(event.target.files[0].name);
    };
  
    const handleTranscript = (event: any) => {
      // setIm(event.target.files[0]);
      setTranscript(event.target.files[0]);
    };
  
    return (
      <div className="about">

        <div>
        <Container centerContent>
            <Text as={'span'} fontSize={34} fontWeight={700} color={'blue.400'}>
                  Verify a Document or Credential now!
            </Text>

            <br /><br />

            <FormControl p={1}>
              <Flex as='b' maxW={60} alignContent="center" fontSize={22} boxShadow='dark-lg' p='6' rounded='lg' _hover={{
          bg: 'blue.100',
        }}>
                <label htmlFor="formFileImage">+ Upload to Verify</label>
              </Flex>
              <input
                type="file"
                id="formFileImage"
                onChange={handleImage}
                defaultValue={imageName ? imageName : ""}
                style={{ display: "none" }}
                required
              />
            </FormControl>
            </Container>
        </div>

        <br /><br /><br />

      <Container centerContent>
        <Box height="100%" w="100%">
          {image ? (
            <Text fontSize="xl">File to be validated.</Text>
          ) : (
            <>
              <Text fontSize="md">Your file will display here.</Text>
              <Image
                src="/placeholder.png"
                alt="description"
                width={600}
                height={600}
                style={{
                  objectFit: "contain",
                  paddingTop: "2rem",
                }}
              />
            </>
          )}

          {image && (
            <Image
              src={image ? URL.createObjectURL(image) : ""}
              alt="description"
              width={600}
              height={600}
              style={{
                objectFit: "contain",
                paddingTop: "2rem",
              }}
            />
          )}
        </Box>

        <br /><br />

        <Button
              bg="blue.500"
              color="white"
              alignItems="center"
              justifyContent="center"
              boxShadow='dark-lg' p='6' rounded='lg'
              colorScheme='messenger' 
              variant='solid'
            >
              Submit
            </Button>
            </Container>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


        <Container>
        {/*HARDCODED*/}
        <TableContainer>
            <Table variant='simple'>
                <TableCaption></TableCaption>
                <Thead>
                <Tr>
                    <Th>Top Verifiers</Th>
                    <Th>Amount</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>VerifyFirst.ETH</Td>
                    <Td>45.4</Td>
                </Tr>
                <Tr>
                    <Td>DELG.ETH</Td>
                    <Td>30.48</Td>
                </Tr>
                <Tr>
                    <Td>FirstBankND.ETH</Td>
                    <Td>9.91444</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                </Tfoot>
            </Table>
        </TableContainer>
        
        </Container>
        <br /><br />
      </div>
    );
  };
  
  export default Verify;
  