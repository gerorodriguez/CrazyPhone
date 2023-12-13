import { Accordion, Col, Container, Row } from 'react-bootstrap';

import { ThemeContext } from '../../contexts/theme/theme.context';
import { useContext, useState } from 'react';

import FilterList from '../../components/filterList/filterList.jsx';
import PublicationCard from '../../components/publicationCard/PublicationCard.jsx';


const Home = () => {
  const { theme } = useContext(ThemeContext);

  const publicationsList = [
    {
      id: 1,
      title: 'Iphone 15 Pro Max',
      brand: 'Apple',
      price: 230,
      storage: '64 GB',
      description:
        'Some quick example text to build on the card title and make.',
      phoneNumber: '123456789',
      instagram: 'instagram',
      state: 'Rosario',
    },
    {
      id: 2,
      title: 'Samsung S20 FE',
      brand: 'Samsung',
      price: 300,
      storage: '128 GB',
      description:
        'Some quick example text to build on the card title and make.',
      phoneNumber: '123456789',
      instagram: 'instagram',
      state: 'Santa Fe',
    },
    {
      id: 3,
      title: 'Redmi Note 10 Pro',
      brand: 'Xiaomi',
      price: 200,
      storage: 64,
      description:
        'Some quick example text to build on the card title and make.',
      phoneNumber: '123456789',
      instagram: 'instagram',
      state: 'Galvez Fe',
    },
    {
      id: 4,
      title: 'Iphone 10 Pro Max',
      brand: 'Apple',
      price: 100,
      storage: 64,
      description:
        'Some quick example text to build on the card title and make.',
      phoneNumber: '12341234234',
      instagram: 'instagram',
      state: 'Santa Fe',
    },
    {
      id: 5,
      title: 'Samsung S23 FE',
      brand: 'Samsung',
      price: 500,
      storage: 128,
      description:
        'Some quick example text to build on the card title and make.',
      phoneNumber: '123456789',
      instagram: 'instagram',
      state: 'Santa Fe',
    },
    {
      id: 6,
      title: 'Motorola G20 Pro',
      brand: 'Motorola',
      price: 500,
      storage: 128,
      description:
        'Some quick example text to build on the card title and make.',
      phoneNumber: '123456789',
      instagram: 'instagram',
      state: 'Santa Fe',
    },
  ];

  const [filteredPublications, setFilteredPublications] = useState([]);

  const [publications, setPublications] = useState(publicationsList);

  const publicationsMapped = filteredPublications.map((publication) => (
    <Col key={publication.id}>
      <PublicationCard
        className="mb-3"
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
      className={`mt-5 mb-0 py-4 px-xl-5 mb-2 ${
        theme === 'dark' ? 'bg-dark' : 'bg-light'
      }`}
    >
      <Row className="mb-4 mt-lg-3">
        <Col col={3} className="d-none d-lg-block col-lg-3">
          <FilterList
            publications={publications}
            setPublications={setPublications}
            filteredPublications={filteredPublications}
            setFilteredPublications={setFilteredPublications}
          />{' '}
        </Col>
        <Col col={9}>
          <Row className="d-lg-none d-block mb-3">
            <Col col={12} className="px-4">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="text-center">
                    BUSCAR
                  </Accordion.Header>
                  <Accordion.Body>
                    <FilterList
                      publications={publications}
                      setPublications={setPublications}
                      filteredPublications={filteredPublications}
                      setFilteredPublications={setFilteredPublications}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3 w-auto-l">
            {publicationsMapped}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
