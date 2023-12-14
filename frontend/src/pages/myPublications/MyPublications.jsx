import { useState, useEffect, useContext } from 'react';
import { getMyPublications } from '../../services/publicationService';
import PublicationCard from '../../components/publicationCard/PublicationCard';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { APIContext } from '../../services/ApiContext';

const MyPublication = () => {
  const { theme } = useContext(ThemeContext);

  const [myPublications, setMyPublications] = useState([]);

  const { isLoading, toggleLoading } = useContext(APIContext);


  useEffect(() => {
    // Lógica para obtener las publicaciones del usuario actual
    const fetchMyPublications = async () => {
      toggleLoading(true);
      try {
        const publications = await getMyPublications(); 
        setMyPublications(publications);
        toggleLoading(false);
      } catch (error) {
        toggleLoading(false);
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
      {!isLoading ? (
      <>
        <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 row-cols-xl-3 w-auto-l">
          {publicationsMapped}
        </Row>
      </>
      ) : (
      <Spinner style={{position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, margin: "auto"}}/>
      )}
    </Container>
  );
};

export default MyPublication;
