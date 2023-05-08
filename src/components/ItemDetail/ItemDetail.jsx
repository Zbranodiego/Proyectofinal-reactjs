import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
    const [tieneCantidad, actualizarTieneCantidad] =useState(false)  
    const {agregarAlCart} = useCartContext()

    const onAdd = (cantidad)=>{
        console.log(cantidad)
        agregarAlCart({...product, quantity: cantidad})
        actualizarTieneCantidad(true)
    }
    return (
        <div className="position-relative">
            <div className="text-center">
                <img src={product.foto}/>
                <h3>{product.name}</h3>
                <h4>{product.price}$</h4>
               
            </div>
            <div className="text-center grid gap-3">
                {tieneCantidad ?                   
                  <>
                  <div className="d-grid gap-2 d-md-block">
                  <Link className="btn btn-secondary" type="button" to='/cart'> CARRITO </Link>
                  <Link className="btn btn-secondary" type="button" to='/'>SEGUIR COMPRANDO </Link>

                  </div>
                  </>
                  :
                  <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
            </div>
        </div>
    )
}
