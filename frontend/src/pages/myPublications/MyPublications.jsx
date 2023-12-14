import { useState, useEffect, useContext } from 'react';
import { getMyPublications } from '../../services/publicationService';
import PublicationCard from '../../components/publicationCard/PublicationCard';
import { Col, Container, Row } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/theme/theme.context';

const MyPublication = () => {
  const { theme } = useContext(ThemeContext);

  const [myPublications, setMyPublications] = useState([]);

  useEffect(() => {
    // Lógica para obtener las publicaciones del usuario actual
    const fetchMyPublications = async () => {
      try {
        const publications = await getMyPublications(); 
        setMyPublications(publications);
      } catch (error) {
        console.error('Error al obtener mis publicaciones:', error);
      }
    };

    fetchMyPublications();
  }, []);

  const publicationsMapped = myPublications.map((publication) => (
    <Col key={publication.id} className="mb-2">
      <PublicationCard
        key={publication.id}
        id={publication.id}
        title={publication.title}
        price={publication.price}
        description={publication.description}
      />
    </Col>
  ));

  return (
    <Container
      data-bs-theme={theme}
      fluid
      className="mt-5 mb-0 py-4 px-xl-5 mb-2"
    >
      <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3 w-auto-l">
        {publicationsMapped}
      </Row>
    </Container>
  );
};

export default MyPublication;
