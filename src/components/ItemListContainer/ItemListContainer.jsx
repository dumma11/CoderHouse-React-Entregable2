import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({ text }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const url = 'https://dummyjson.com/products'

        fetch(url)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [])

    return (
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer