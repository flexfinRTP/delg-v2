import { ReactElement } from 'react';
import { Box, Container, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container maxW="80%" centerContent>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'Benefits'}
            text={
              `The DataLink DAO will monetize anonymous data-sharing, and
              provide a powerful tokenization platform for credentials,
              documents, and other data. Our system will incentivize the
              validated data the user is receiving via smart contracts and
              oracle networks. Our services will give ownership of personal
              data back to the user while retaining the integrity of that
              data.`
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Unlimited Donations'}
            text={
              `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...`
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={'Contact'}
            text={
              `Building the next generation of data validation and data-sharing tools and infrastructure.

              Contact support@datalinkdao.com to talk more about our solutions in data validation.`
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}