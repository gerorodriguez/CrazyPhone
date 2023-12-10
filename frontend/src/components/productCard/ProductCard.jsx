import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard() {
  return (
    <Card style={{ width: 'auto' }} className="rounded-3 mx-2 shadow">
      <Card.Img
        variant="top"
        src="https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg"
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-center mb-3 title">
          Iphone 15 Pro Max
        </Card.Title>
        <Card.Text className="d-flex justify-content-center align-items-center">
          Some quick example text to build on the card title and make.
        </Card.Text>
        <Card.Text
          className="d-flex justify-content-between align-items-center price"
          style={{ fontSize: '19px', margin: '1% 0' }}
        >
          $230,00
          <Link to="/detail">
          <Button className='ml-auto'>Ver</Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
