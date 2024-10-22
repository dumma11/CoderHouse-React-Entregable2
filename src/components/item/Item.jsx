import Card from 'react-bootstrap/Card';

function Item({item, onClick}) {
  return (
    <Card 
      style={{ width: '18rem', cursor: 'pointer' }} 
      onClick={onClick}
    >
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
    </Card>
  );
}

export default Item;