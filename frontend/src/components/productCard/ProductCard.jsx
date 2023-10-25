import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard() {
  return (
    <Card style={{ width: '18rem' }} className='rounded-3 mx-2 shadow'>
      <Card.Img variant="top" src="https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-center mb-3 title'>Iphone 15 Pro Max</Card.Title>
        <Card.Text className='d-flex justify-content-center align-items-center'>
          Some quick example text to build on the card title and make.
        </Card.Text>
        <Card.Text className='price ' style={{ fontSize: '19px', margin: '1% 0' }}>
            $230,00
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;