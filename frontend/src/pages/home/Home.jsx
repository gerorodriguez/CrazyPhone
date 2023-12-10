import ProductCard from '../../components/productCard/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { useContext } from 'react';

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Container
      data-bs-theme={theme}
      fluid
      className={`d-flex justify-content-center align-items-center mb-2 ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}
    >
      <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
        <Col>
          <ProductCard className="mb-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
