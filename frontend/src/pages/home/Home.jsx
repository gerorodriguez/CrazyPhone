import { Accordion, Col, Container, Row } from 'react-bootstrap';

import { ThemeContext } from '../../contexts/theme/theme.context';
import { useContext, useEffect, useState } from 'react';

import FilterList from '../../components/filterList/filterList.jsx';
import PublicationCard from '../../components/publicationCard/PublicationCard.jsx';
import { getAllPublications } from '../../services/publicationService.js';


const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [filteredPublications, setFilteredPublications] = useState([]);

  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const allPublications = await getAllPublications();
        setPublications(allPublications);
      }
      catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPublications();
  }, []);



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
