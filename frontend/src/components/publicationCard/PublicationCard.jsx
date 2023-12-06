import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PublicationCard({ id, title, price, description }) {
  return (
    <Card key={id} style={{ width: '18rem', margin: '10px 0' }} className="rounded-3 shadow">
      <Card.Img
        variant="top"
        src="https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center mb-3 title">
          {title}
        </Card.Title>
        <Card.Text className="d-flex justify-content-center align-items-center">
          {description}
        </Card.Text>
        <Card.Text
          className="d-flex justify-content-between align-items-center price"
          style={{ fontSize: '19px', margin: '1% 0' }}
        >
          ${price} USD
          <Button className="ml-auto">Ver</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PublicationCard;
