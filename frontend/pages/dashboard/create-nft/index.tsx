import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Button,
  Text,
  Box,
  SimpleGrid,
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
import axios from "axios";
import { QuestionIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { NFTStorage, File } from "nft.storage";
import { unknown } from "zod";

const StyledInputGroup = styled(InputGroup, {
  baseStyle: {
    flexDirection: "column",
  },
});

const StyledFormLabel = styled(FormLabel, {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    columnGap: 2,
  },
});

const Createnft = () => {
  const { contractPublisher } = "0x";
  console.log(
    "🚀 ~ file: index.tsx:48 ~ Createnft ~ contractPublisher",
    contractPublisher
  );
  const api =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY4YzllNUVlYjg0OWY3NUNkQzdjMzhjOTUzYjEwYTVDZUIyRTU5Y0IiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyODY1MzQ0NzExOCwibmFtZSI6InBldGdyYW0ifQ.mhS4FK7akbSBrA_uFQoWnu4WyisY__k1DoXgyBIsorA";
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
    try {
      const obj = {
        diploma: data.diploma ? data.diploma : "Bachelors",
        diplomaDate: data.diplomaDate ? data.diplomaDate : "Dec 20 2021",
        diplomaVerification: data.diplomaVerification
          ? data.diplomaVerification
          : "No",
        documentType: data.documentType ? data.documentType : "Diploma",
        gpa: data.gpa ? data.gpa : "3.5",
        graduationDate: data.graduationDate
          ? data.graduationDate
          : "Dec 20 2021",
        major: data.major ? data.major : "Computer Science",
        minor: data.minor ? data.minor : "Business",
        name: data.name ? data.name : "Joe Doe",
        studentId: data.studentId ? data.studentId : "24235690",
        walletId: data.walletId
          ? data.walletId
          : "0xf4eA652F5B7b55f1493631Ea4aFAA63Fe0acc57C",
        image: image
          ? image
          : "http://edgarbarroso.net/wp-content/uploads/2010/04/Edgar_Barroso_Teaching.jpg",
        transcript: transcript
          ? transcript
          : "https://www.nextdaydiplomas.com/images/products/High_School_Transcripts_01_Med.jpg",
      };

      console.log("what is obj", obj);

      const client = new NFTStorage({ token: api });
      const metadata = await client.store({
        name: data.name,
        description: JSON.stringify(obj),
        image: new File(["image"], "imageName", { type: "image/*" }),
      });
      console.log("metadata", metadata);

      if (metadata) {
        console.log("metadata URL", metadata?.url);
        const url = metadata?.url.substring(7); //  bafyreifeiksc7pfbdex5fhes2inqdail7cvf3jfphugtpyzw4rpzte3rca/metadata.json
        const fullUrl = `https://cloudflare-ipfs.com/ipfs/${url}`;
        console.log("fullUrl", fullUrl);

        const saveToContract = await contractPublisher.createNFT(fullUrl);
        const tx = await saveToContract.wait();
        console.log("tx", tx);
        // history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = async (event: any) => {
    const updataData = new FormData();
    updataData.append("file", event.target.files[0]);
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      updataData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: "83d0fe9284cd9725ed27",
          pinata_secret_api_key:
            "76783aa462509dafe4beac3f659accae0ddf3de55f53281a033deb71d86774c5",
        },
      }
    );
    setImage("https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash);
  };

  const handleTranscript = async (event: any) => {
    const updataData = new FormData();
    updataData.append("file", event.target.files[0]);
    const res = await axios.post(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      updataData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: "83d0fe9284cd9725ed27",
          pinata_secret_api_key:
            "76783aa462509dafe4beac3f659accae0ddf3de55f53281a033deb71d86774c5",
        },
      }
    );
    setTranscript("https://gateway.pinata.cloud/ipfs/" + res.data.IpfsHash);
  };

  return (
    <>
      <Box p={4}>
        <Text fontSize="4xl" color={'green.500'} fontWeight={700}>
          Digital Engineering License Group - Data Standards
        </Text>

        {/* <Text fontSize="2xl">
          At DataLink we put data security first.
        </Text> */}
        <br />
        <Text fontSize="2xl">
          After tokenization, your data will have new value streams unlocked
          powered by blockchain and crypto technologies.
        </Text>
        <br /><br />
        <Flex gap="2">
          <Text fontSize="xl" style={{ fontWeight: "400" }}>
            Upload csv with following fields to match:
          </Text>

          <Button colorScheme="twitter" isDisabled>
            Download Template
          </Button>

          <Button colorScheme="twitter" isDisabled>
            Upload CSV file
          </Button>
        </Flex>
      </Box>
      <br /><br />

      <SimpleGrid minChildWidth="120px" spacing="40px">
        {/* FORM */}
        <Box height="100%" w="100%" pb={10}>
          <Container>
            <FormControl p={1}>
              <Flex as='b' alignContent="center" boxShadow='dark-lg' p='4' rounded='md'>
                <label htmlFor="formFileImage">+ Upload Diploma Image</label>
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

            <br />

            <FormControl p={1}>
              <Flex as='b' alignContent="center" boxShadow='dark-lg' p='4' rounded='md'>
                <label htmlFor="formFileTranscript">+ Upload Transcripts</label>
              </Flex>
              <input
                type="file"
                id="formFileTranscript"
                onChange={handleTranscript}
                defaultValue={transcript ? transcript : ""}
                style={{ display: "none" }}
                required
              />
            </FormControl>

            <br /><br />

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Student ID</Text>
                <Tooltip
                  hasArrow
                  label="A unique identifier for the student, such as a university-issued
          student ID number."
                  bg="gray.100"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("studentId")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Wallet ID</Text>
                <Tooltip
                  hasArrow
                  label="Web3 wallet public address of recipient, if known."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("walletId")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Document Type</Text>
                <Tooltip
                  hasArrow
                  label="Type of data or document being tokenized."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Select {...register("documentType")}>
                <option value="diploma">Diploma</option>
                <option value="certification">Certification</option>
                <option value="license">License</option>
                <option value="other">Other</option>
              </Select>
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Name</Text>
                <Tooltip
                  hasArrow
                  label="The student's full name, including first, middle, and last names."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("name")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Degree</Text>
                <Tooltip
                  hasArrow
                  label="The student's degree, such as Bachelor of Science or Master of Arts."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("degree")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Major</Text>
                <Tooltip
                  hasArrow
                  label="The student's major field of study, such as Computer Science or English."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("major")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Minor</Text>
                <Tooltip
                  hasArrow
                  label="The student's minor field of study, if applicable."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("minor")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Graduation Date</Text>
                <Tooltip
                  hasArrow
                  label="The date the student graduated."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("graduationDate")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>GPA</Text>
                <Tooltip
                  hasArrow
                  label="The student's grade point average."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("gpa")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Diploma #</Text>
                <Tooltip
                  hasArrow
                  label=" A unique identifier for the diploma, such as a serial number."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("diploma")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Diploma Issued Date</Text>
                <Tooltip
                  hasArrow
                  label="The date the diploma was issued."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("diplomaDate")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Diploma Verification</Text>
                <Tooltip
                  hasArrow
                  label="A flag indicating whether the diploma has been
          verified as authentic."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Select {...register("diplomaVerification")}>
                <option value="Yes">Yes</option>
                <option value="No">Not Yet</option>
              </Select>
            </StyledInputGroup>

            <Button colorScheme="twitter" width="100%" marginTop={10} onClick={handleSubmit(onSubmit)}>
              Create NFT
            </Button>
          </Container>
        </Box>

        {/* LABELS */}
        <Box height="100%" w="100%">
          {image ? (
            <Text fontSize="xl">Your Diploma</Text>
          ) : (
            <>
              <Text fontSize="xl">Your diploma will display here</Text>
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
              src={image ? image : ""}
              alt="description"
              width={600}
              height={600}
              style={{
                objectFit: "contain",
                paddingTop: "2rem",
              }}
            />
          )}

          <br />

          {transcript ? (
            <Text fontSize="xl">Your Transcripts</Text>
          ) : (
            <>
              <Text fontSize="xl">Your Transcripts will display here</Text>
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
          {transcript && (
            <Image
              src={transcript ? transcript : ""}
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
      </SimpleGrid>
    </>
  );
};

export default Createnft;
