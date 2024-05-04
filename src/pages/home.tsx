import storeItems from "../data/products.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/storeitem";
import { Banner } from "../components/Banner";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Home() {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleViewMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  return (
    <>
      <Banner /> {/* Render the Banner component */}
      <h1 className="text-center">Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {storeItems.slice(0, visibleItems).map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      {storeItems.length > visibleItems && (
        <div className="text-center mt-3">
           <Link to="/store" onClick={handleViewMore}>View More</Link>
        </div>
      )}
    </>
  );
}
