import Navbar from "@/components/Navbar";
import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";

const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="DataDAO">
        <Card align="center">
          <CardHeader>
            <Heading size="md"> DataLink DAO </Heading>
          </CardHeader>
          <CardBody>
            The DataLink DAO will monetize anonymous data-sharing, and provide a
            powerful tokenazation platform for credentials, documents, and other
            data
          </CardBody>
        </Card>
      </div>
      <div className="Dashboard">
        <Card align="center">
          <CardHeader>
            <Heading size="md"> DataLink Dashboard </Heading>
          </CardHeader>
          <CardBody>
            The DAO will host the DataLink Dashboard, a powerful easy-to-use
            tokenazation platform for institutions and users to manage their
            credentials, documents, and other data
          </CardBody>
        </Card>
      </div>
      <div className="Validator">
        <Card align="center">
          <CardHeader>
            <Heading size="md"> DataLink Validator </Heading>
          </CardHeader>
          <CardBody>
            The DataLink validator will use multiple technologies on the
            forefront of cryptography research that will aid validation of DAO
            data, documents, and identities.
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Products;
