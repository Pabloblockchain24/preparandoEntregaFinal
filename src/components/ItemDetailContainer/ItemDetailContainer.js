import React from 'react'
import { useState, useEffect } from 'react'
import { getProductoById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import "./ItemDetailContainer.css"
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  useEffect(() => {
    getProductoById(itemId)
      .then(response => {
        setProducto(response)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
      })
  }, [itemId])

  if (loading) {
    return (
      <Loader />
    )
  } else {
    return (
      <div className='ItemDetailContainer'>
        <ItemDetail {...producto} />
      </div>
    )
  }
}


export default ItemDetailContainer