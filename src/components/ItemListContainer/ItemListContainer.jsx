import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList'
import Loader from '../Loader/Loader'
import { getItems, getCategoryItems } from '../../firebase/db'

const ItemListContainer = ({ text }) => {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if (!id) {
            getItems()
                .then(res => setItems(res))
        } else {
            getCategoryItems(id)
                .then(res => setItems(res))
        }
    }, [id])

    return (
        <>
            {items.length > 0 ? <ItemList items={items} /> : <Loader />}
        </>
    )
}

export default ItemListContainer