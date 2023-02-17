import {
  Text,
  Container,
  Heading,
  Input,
  InputGroup,
  FormLabel,
  styled,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const StyledInputGroup = styled(InputGroup, {
  baseStyle: {
    flexDirection: "column",
  },
});

const StorageOnboard: React.FC = () => {
  const router = useRouter();

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

  return (
    <>
      <Container display="flex" flexDirection="column" rowGap={10}>
        <Heading>Welcome Back, Publisher!</Heading>
        <Text color={'gray.700'} fontWeight={500} fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}>
          Create a Storage Deal
        </Text>
        <Text color={'gray.600'} fontWeight={500} fontSize={{ base: 'md', sm: 'l', md: 'xl' }}>
          Please select from one of the storage providers below to start tokenizing data!
        </Text>
        <br />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: 10,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <StyledInputGroup>
            <FormLabel>Storage Provider{`*`}</FormLabel>
            <Input {...register("companyIndustry")} />
          </StyledInputGroup>
          <br />
          <StyledInputGroup>
            <FormLabel>Storage Length{`*`}</FormLabel>
            <Input {...register("companySize")} />
          </StyledInputGroup>
          <br />
          <StyledInputGroup>
            <FormLabel>Company Name{`*`}</FormLabel>
            <Input {...register("companyName")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Contact Email{`*`}</FormLabel>
            <Input {...register("contactEmail")} />
          </StyledInputGroup>
          <StyledInputGroup>
            <FormLabel>Contact Person</FormLabel>
            <Input {...register("contactPerson")} />
          </StyledInputGroup>
          <br />
          <Text>Automate  {'[X]'}</Text>
          <Button colorScheme="green" marginTop={10} width="100%" type="submit" onClick={() => router.push("/storageplansuccess")}>
            Create Storage Plan
          </Button>
        </form>
      </Container>
    </>
  );
};

export default StorageOnboard;
