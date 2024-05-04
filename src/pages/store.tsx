import storeItems from "../data/products.json"
import { Row, Col} from "react-bootstrap"
import { StoreItem } from "../components/storeitem"

export function Store() {
    return (
        <>
            <h1 className="text-center">Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}><StoreItem {...item} /></Col>
                ))}
            </Row>
        </>
    )
}