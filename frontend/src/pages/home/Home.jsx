import ProductCard from '../../components/productCard/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import ToggleTheme from '../../components/toggleTheme/ToggleTheme';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { useContext } from 'react';

const Home = () => {

  const { theme } = useContext(ThemeContext);

  const publicationsList = [
    {
      id: 1,
      title: "Iphone 15 Pro Max",
      price: 230,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Rosario",
    },
    {
      id: 2,
      title: "Iphone 14 Pro Max",
      price: 300,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Santa Fe",
    },
    {
      id: 3,
      title: "Iphone 11 Pro Max",
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
      price: 100,
      storage: 64,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "12341234234",
      instagram: "instagram",
      state: "Santa Fe",
    },
    {
      id: 5,
      title: "Iphone 15 Pro Max",
      price: 500,
      storage: 128,
      description: "Some quick example text to build on the card title and make.",
      phoneNumber: "123456789",
      instagram: "instagram",
      state: "Santa Fe",
    },
  ];

  const publicationsMapped = publicationsList.map((publication) => (
    <Col key={publication.id}>
      <ProductCard className="mb-3"
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
    <Container
      data-bs-theme={theme}
      fluid
      className="d-flex justify-content-center align-items-center mb-2   "
    >
      <ToggleTheme />
      <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       
          {publicationsMapped}
        
      </Row>
    </Container>
  );
};

export default Home;
