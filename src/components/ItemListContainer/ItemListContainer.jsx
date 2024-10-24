import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'    
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({ text }) => {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${id}`

        fetch(id ? urlCategory : url)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [id])

    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer