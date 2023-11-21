import { Card, Button, Col, Image } from 'react-bootstrap';

const Detail = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Nillkin iPhone X cover</Card.Title>
          <Card.Text>10000 Ks Add to cart Buy now</Card.Text>
          <Col xs={6} md={4}>
            <Image
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708"
              thumbnail
            />
          </Col>

          <Button variant="primary" onClick={() => {}}>
            contactar al vendedor
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
