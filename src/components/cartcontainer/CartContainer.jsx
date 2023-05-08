import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react"
import './CartContainer.css'

export const CartContainer = () => {
  const [id, setId] = useState(null)


  const { cartList,
    vaciarCarrito,
    precioTotal,
    eliminarProducto }
    = useCartContext()

  const handleSubmit = (event) => {

    event.preventDefault()
    const order = {
      items: cartList.map(({ id, name, price }) => ({ id, name, price })),
      total: precioTotal()
    }
    const db = getFirestore()

    const queryCollection = collection(db, 'orders')


    addDoc(queryCollection, order)
      .then(resp => setId(resp.id))
      .catch(err => console.log(err))
      .finally(() => {
        vaciarCarrito()
      })
  }
  
  return (

    <>
      {id && <h2 className="text-center grid gap-3"> ID  {id}</h2>}
      {cartList.length === 0 ?
        <div>
          <Link to='/'>realizar otra compra</Link>
        </div>
        :
        <div className="text-center grid gap-3">
          {cartList.map(product => (
            <li className="none" key={product.id} >
              <img src={product.foto}  className="w-25"/>
             <h2> {product.name}</h2>
             <h2> {product.quantity}</h2>  
              <button className="btn btn-danger" onClick={() => eliminarProducto(product.id)}> x </button>
              <br /><br />
            </li>
          ))}
          <h3>PRECIO TOTAL : {precioTotal()}</h3>
          <button className="btn btn-secondary" type="button" onClick={vaciarCarrito}>VACIAR CARRITO</button>
            <button className="btn btn-secondary" type="button" onClick={handleSubmit}> GENERAR ORDEN </button>
        </div>}
    </>
  )
}
