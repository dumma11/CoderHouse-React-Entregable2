import { useEffect, useState } from 'react'
import { productos } from '../../data/products'
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList'

const ItemListContainer = ({ text }) => {
    const [items, setItems] = useState([])

    const getProducts = () => new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        },3000)
    })

    useEffect(() => {
        getProducts()
            .then(res => setItems(res))
    },[])

    return(
        <div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer