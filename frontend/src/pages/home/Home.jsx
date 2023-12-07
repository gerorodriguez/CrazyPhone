import { Container, Row, Col, Form, Button  } from 'react-bootstrap';

import { ThemeContext } from '../../contexts/theme/theme.context';
import { useContext, useState } from 'react';
import PublicationCard from '../../components/publicationCard/PublicationCard';
import FilterList from '../../components/filterList/filterList';

const Home = () => {

  const { theme } = useContext(ThemeContext);


  const publicationsList = [
    {
      id: 1,
      title: "Iphone 15 Pro Max",
      brand: "Apple",
      price: 230,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Rosario",
    },
    {
      id: 2,
      title: "Samsung S20 FE",
      brand: "Samsung",
      price: 300,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Santa Fe",
    },
    {
      id: 3,
      title: "Redmi Note 10 Pro",
      brand: "Xiaomi",
      price: 200,
      storage: 64,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Galvez Fe",
    },
    {
      id: 4,
      title: "Iphone 10 Pro Max",
      brand: "Apple",
      price: 100,
      storage: 64,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "12341234234",
      instagram: "instagram",
      state: "Santa Fe",
    },
    {
      id: 5,
      title: "Samsung S23 FE",
      brand: "Samsung",
      price: 500,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Santa Fe",
    },
    {
      id: 6,
      title: "Motorola G20 Pro",
      brand: "Motorola",
      price: 500,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Santa Fe",
    },
  ];

 
  const [filteredBrand, setFilteredBrand] = useState('');

 

  const filteredPublications = filteredBrand
  ? publicationsList.filter((publication) => publication.brand === filteredBrand)
  : publicationsList;

  const publicationsMapped = filteredPublications.map((publication) => (
    <Col key={publication.id} xs={12} sm={6} md={4} lg={3}>
      <PublicationCard className="mb-3" 
        key={publication.id} 
        title={publication.title}
        price={publication.price}
        storage={publication.storage}
        description={publication.description}
        phoneNumber={publication.phoneNumber}
        instagram={publication.instagram}
        state={publication.state}
      />
    </Col>
  ));

  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="sidebar">
          <Form>
            <FilterList/>
          </Form>
        </Col>
        <Col md={9} lg={10}>
          <Row>
            {[...Array(12)].map((_, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
                {publicationsMapped}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
