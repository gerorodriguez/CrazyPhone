import { Container, Row, Col  } from 'react-bootstrap';
import ToggleTheme from '../../components/toggleTheme/ToggleTheme';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { useContext, useState } from 'react';
import PublicationCard from '../../components/publicationCard/PublicationCard';
import BrandFilter from '../../components/brandFilter/BrandFilter';

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

  const brands = [...new Set(publicationsList.map((publication) => publication.brand))];

  const [filteredBrand, setFilteredBrand] = useState('');

  const handleFilterBrand = (brand) => {
    setFilteredBrand(brand);
  };

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
    <Container
      data-bs-theme={theme}
      fluid
      className="d-flex flex-row align-items-center mb-2"
      //style={{ maxWidth: '1200px' }}
    >
      <ToggleTheme />
      <Col sm={3} className="mb-3" style={{ maxWidth: '100px' }}>
          <BrandFilter brands={brands} onFilterChange={handleFilterBrand} />
      </Col>
      <Col sm={9}>
          <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
            {publicationsMapped}
          </Row>
      </Col>
    </Container>
  );
};

export default Home;
