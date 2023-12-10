import { useContext, useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { ThemeContext } from '../../contexts/theme/theme.context';
import { getPublicationById } from '../../services/publicationService';
import { useParams } from 'react-router-dom';

const PublicationDetail = () => {

  const { id } = useParams();

  const { theme } = useContext(ThemeContext);

  const buttonClasses =
    theme === 'dark'
      ? 'btn-dark border border-light text-light'
      : 'btn-dark border border-light text-light';

  const [publicationDetails, setPublicationDetails] = useState();
  const [publicationDetailsErrors, setPublicationDetailErrors] = useState();

  const getPublication = async (publicationId) => {
    try {
      const publication = await getPublicationById(publicationId);
      setPublicationDetails(publication);
    } catch (error) {
      setPublicationDetailErrors(error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getPublication(id);
    }
  }, []);

  if (publicationDetailsErrors) {
    return <div>Error: {publicationDetailsErrors}</div>;
  }

  if (!publicationDetails) {
    return <div>Loading...</div>;
  }



  return (
    <Row
      className={`mt-5 py-4 px-xl-5 mx-2 ${
        theme === 'dark' ? 'bg-dark text-light' : ''
      }`}
    >
      <Col lg={1} className="d-none d-lg-block">
        <div className="image-vertical-scroller">
          <div className="d-flex flex-column">
            {Array.from({ length: 6 }, (x, i) => {
              let selected = i !== 1 ? 'opacity-6' : '';
              return (
                <a key={i} href="!#">
                  <img
                    className={'rounded mb-2 ratio ' + selected}
                    alt=""
                    src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </Col>

      <Col lg={6}>
        <Row>
          <Col xs={12} className="mb-4">
            <img
              className="border rounded ratio ratio-1x1"
              alt=""
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702708"
            />
          </Col>
        </Row>
      </Col>

      <Col lg={5}>
        <div className="d-flex flex-column h-100">
          <h2 className="mb-1">{publicationDetails.title}</h2>
          <h4 className="text-muted mb-4">${publicationDetails.price}</h4>

          <Row className="g-3 mb-4">
            <Col>
              <Button
                variant="primary"
                className={`py-2 w-100 ${buttonClasses}`}
              >
                Contact
              </Button>
            </Col>
          </Row>

          <h4 className="mb-0">Details</h4>
          <hr />
          <dl className="row">
            <Col sm={4}>Brand</Col>
            <Col sm={8} as="dd" className="mb-3">
              Apple
            </Col>

            <Col sm={4}>Model</Col>
            <Col sm={8} className="mb-3">
              Iphone 15 pro
            </Col>

            <Col sm={4} className="mb-3">
              Color
            </Col>
            <Col sm={8} className="mb-3">
              Red, Green, Blue, Pink
            </Col>

            <Col sm={4}>Status</Col>
            <Col sm={8} className="mb-3">
              Instock
            </Col>
          </dl>

          <h4 className="mb-0">Description</h4>
          <hr />
          <p className="lead flex-shrink-0">
            <small>
              {publicationDetails.description}
            </small>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default PublicationDetail;
