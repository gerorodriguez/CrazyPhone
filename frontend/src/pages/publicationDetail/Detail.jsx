// import { Card, Button, Container, Col, Image } from 'react-bootstrap';

// const Detail = () => {
//   return (
//     <Container className="d-flex justify-content-center align-items-center">
//       <div>
//         {
//           <Col xs={6} md={4}>
//             <Image
//               src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708"
//               className="img-fluid rounded-start mx-auto d-block w-600 h-600 d-flex justify-content-center align-items-center "
//             />
//           </Col>
//         }
//       </div>
//       <Container>
//         <div >
//           <Card.Body>
//             <Card.Title>Nillkin iPhone X cover</Card.Title>
//             <Card.Text>10000 Ks</Card.Text>
//           </Card.Body>
//         </div>

//         <div>
//           <Button variant="primary" onClick={() => {}}>
//             Add to cart
//           </Button>
//         </div>

//         <div>
//           <Card.Body>
//             <Card.Title>detail</Card.Title>
//             <Card.Text>code</Card.Text>
//             <Card.Text>Category</Card.Text>
//             <Card.Text>Brand</Card.Text>
//             <Card.Text>Manufacturer</Card.Text>
//             <Card.Text>Color</Card.Text>
//             <Card.Text>Status</Card.Text>
//             <Card.Text>Rating</Card.Text>
//           </Card.Body>
//         </div>

//         <div>
//           <Card.Body>
//             <Card.Title>Description</Card.Title>
//             <Card.Text>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
//               voluptatum, quia, voluptatem, quidem ipsum quas dolorum
//               exercitationem doloremque quod voluptates quibusdam. Quisquam
//               voluptatum, quia, voluptatem, quidem ipsum quas dolorum
//               exercitationem doloremque quod voluptates quibusdam.
//             </Card.Text>
//           </Card.Body>
//         </div>
//       </Container>
//     </Container>
//   );
// };

// export default Detail;

import { Card, Button, Container, Col, Image, Row } from 'react-bootstrap';

const Detail = () => {
  return (
    <Container className="my-4 justify-content-center align-items-center">
      <Row>
        <Col xs={12} md={6}>
          <Image
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708"
            className="img-fluid rounded-start mx-auto d-block w-100 h-100"
          />
        </Col>
        <Col xs={12} md={6}>
          <Card.Body>
            <Card.Title>Nillkin iPhone X cover</Card.Title>
            <Card.Text>10000 Ks</Card.Text>
            <Button variant="primary" onClick={() => {}}>
              Add to cart
            </Button>
          </Card.Body>
        </Col>
      </Row>

      <Row className="my-4 justify-content-center align-items-center">
        <Col md={6}>
          <Card.Body>
            <Card.Title>Detail</Card.Title>
            <Card.Text>Code</Card.Text>
            <Card.Text>Category</Card.Text>
            <Card.Text>Brand</Card.Text>
            <Card.Text>Manufacturer</Card.Text>
            <Card.Text>Color</Card.Text>
            <Card.Text>Status</Card.Text>
            <Card.Text>Rating</Card.Text>
          </Card.Body>
        </Col>
        <Row className="my-4 justify-content-center align-items-center ">
          <Col md={6}>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quia, voluptatem, quidem ipsum quas dolorum
                exercitationem doloremque quod voluptates quibusdam. Quisquam
                voluptatum, quia, voluptatem, quidem ipsum quas dolorum
                exercitationem doloremque quod voluptates quibusdam.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Detail;
