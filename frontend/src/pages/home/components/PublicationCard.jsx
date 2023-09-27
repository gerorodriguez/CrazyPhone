import { Card, Container } from 'react-bootstrap';
import { phonedata } from './PhoneData.js';

const PublicationCard = () => {
  const phoneMapped = phonedata.map((phone) => {
    return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-primary" key={phone.id}>
        <Card className="text-center" >
          <Card.Header>{phone.title}</Card.Header>
          <Card.Body>
            <Card.Title>{phone.price}</Card.Title>
            <Card.Text>{phone.storage}</Card.Text>
            <Card.Text>{phone.phoneNumber}</Card.Text>
            <Card.Text>{phone.description}</Card.Text>
          </Card.Body>
          <Card.Footer>{phone.state}, Instagram: {phone.instagramAccount}</Card.Footer>
        </Card>
      </Container>
    );
  });
  return (
    <div className="phones">
      {phoneMapped.length === 0 ? (
        <p>No hay telefonos para mostrar </p>
      ) : (
        phoneMapped
      )}
    </div>
  );
};

export default PublicationCard;
