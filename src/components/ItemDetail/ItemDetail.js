import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({id,nombre,img,categoria,descripcion,precio,stock}) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const handleOnAdd = (cantidad) => {
        setCantidadAgregada(cantidad)
    }


  return (
        <article className="CardItem">
            <header className='Header'>
                <h2 className='ItemHeader'> {nombre}</h2>
            </header>
            <picture className='ItemImg'>
                <img src={img} alt={nombre} className='ImgSize' />
            </picture>
            <section className='centrar'>
                <p className='Info'>Precio: ${precio}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    cantidadAgregada > 0 ? (<Link to="/cart">TERMINAR COMPRA</Link>):  (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>)
                }
            </footer>
        </article>



    )
}

export default ItemDetail