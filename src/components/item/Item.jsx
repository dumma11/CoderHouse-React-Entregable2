import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom'

function Item({item}) {
  return (
    <Col>
    <Card className='h-100'>
      <Card.Img variant="top" src={item.thumbnail} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          Categoría: {item.category}
        </Card.Text>
        <Card.Text>
          Precio: {item.price}
        </Card.Text>
      </Card.Body>
      <Button as={Link} to={`/CoderHouse-React-Entregable2/item/${item.id}`}>Ver más</Button>
    </Card>
    </Col>
  );
}

export default Item;