import Item from "../item/Item"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

function itemList({ items }) {
    return (
        <Container>
            <Row>
                {items.map(item => (
                    <Col key={item.id}>
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default itemList