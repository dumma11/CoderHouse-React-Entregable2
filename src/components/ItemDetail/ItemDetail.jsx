import './ItemDetailStyle.css'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({ detail }) {
  if (!detail) {
    return <p>Cargando detalles del producto...</p>
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={detail.thumbnail} alt={detail.title} />
      </div>
      <div className="item-detail-info">
        <h1>{detail.title}</h1>
        <p className="item-detail-category"><strong>Categoría:</strong> {detail.category}</p>
        <p className="item-detail-description">{detail.description}</p>
        <p className="item-detail-brand"><strong>Marca:</strong> {detail.brand}</p>
        <p className="item-detail-price"><strong>Precio:</strong> ${detail.price}</p>
      </div>
      <ItemCount detail={detail} />
    </div>
  )
}

export default ItemDetail