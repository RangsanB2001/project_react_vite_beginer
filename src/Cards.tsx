import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function CardProducts() {
  return (
    <Container className="p-2">
      <Row md={4} cols={4}>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../public/img-products/6519aa1d288fd.jpg"
            />
            <Card.Body>
              <Card.Title>ฮาวายเอี่ยน</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../public/img-products/651c5b080dbd5.jpg"
            />
            <Card.Body>
              <Card.Title>ฮาวายเอี่ยน</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../public/img-products/6528476535f25.png"
            />
            <Card.Body>
              <Card.Title>ฮาวายเอี่ยน</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="../public/img-products/652ebcedf0c0f.jpg"
            />
            <Card.Body>
              <Card.Title>ฮาวายเอี่ยน</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardProducts;
