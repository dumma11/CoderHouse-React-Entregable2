import Card from 'react-bootstrap/Card';

function Item({item, onClick}) {
  return (
    <Card 
      style={{ width: '18rem', cursor: 'pointer' }} 
      onClick={onClick}
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.descripcion}
        </Card.Text>
        <Card.Text>
          Categoría: {item.categoria}
        </Card.Text>
        <Card.Text>
          Precio: {item.precio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Item;