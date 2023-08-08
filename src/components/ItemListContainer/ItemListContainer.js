import { useState, useEffect } from "react";
import { getProductos , getProductoByCategoria } from "../../asyncMock";
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer =() => {
  const [productos,setProductos] =useState([])
  const [mostrar,setMostrar] =useState("")
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()



  useEffect(() => {
      const asyncFunc = categoriaId ? getProductoByCategoria : getProductos
      categoriaId ? setMostrar(categoriaId) : setMostrar("TODOS LOS PRODUCTOS")
      asyncFunc(categoriaId)
        .then(response => {
          setProductos(response)
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
        })
  },[categoriaId])


  if (loading) {
    return  (
      <Loader />
    )
    }else{
      return(
        <>
          <h2 className="personalizarPage">{mostrar}</h2>
            <ItemList productos={productos} />
        </>
      )
    }    


}
export default ItemListContainer;
