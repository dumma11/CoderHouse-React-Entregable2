import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'    
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList'
import Loader from '../Loader/Loader'

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
        <>
            {items.length > 0 ? <ItemList items={items} /> : <Loader />}
        </>
    )
}

export default ItemListContainer