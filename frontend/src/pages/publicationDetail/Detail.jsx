import { Col, Row, Button } from 'react-bootstrap';

const Detail = () => {
  return (
    <Row className="mb-4 p-3" >
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
          <h2 className="mb-1">Nillkin iPhone X cover</h2>
          <h4 className="text-muted mb-4">$500</h4>

          <Row className="g-3 mb-4">
            <Col>
              <Button variant="dark" className="py-2 w-100">
                Contact
              </Button>
            </Col>
          </Row>

          <h4 className="mb-0">Details</h4>
          <hr />
          <dl className="row">
            <Col sm={4}>
              Brand
            </Col>
            <Col sm={8} as="dd" className="mb-3">
              iPhone X
            </Col>

            <Col sm={4}>
              Manufacturer
            </Col>
            <Col sm={8} className="mb-3">
              Nillkin
            </Col>

            <Col sm={4} className="mb-3" >
              Color
            </Col>
            <Col sm={8} className="mb-3">
              Red, Green, Blue, Pink
            </Col>

            <Col sm={4}>
              Status
            </Col>
            <Col sm={8} className="mb-3">
              Instock
            </Col>
          </dl>

          <h4 className="mb-0">Description</h4>
          <hr />
          <p className="lead flex-shrink-0">
            <small>
              Nature (TPU case) use environmental non-toxic TPU, silky smooth
              and ultrathin. Glittering and translucent, arbitrary rue reserved
              volume button cutouts, easy to operate. Side frosted texture
              anti-slipping, details show its concern; transparent frosted logo
              shows its taste. The release of self, the flavor of life. Nillkin
              launched Nature transparent soft cover, only to retain the
              original phone style. Subverting tradition, redefinition. Thinner
              design Environmental texture better hand feeling.
            </small>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Detail;
