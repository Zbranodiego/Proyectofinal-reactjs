import { memo } from "react"
import { Item } from "../Item/Item"
import './itemlis.css'
export const ItemList = memo(({ productos }) => {
  return (
    <div className="item-container">
      {productos.map(producto => <Item key={producto.id} producto={producto} />)}
    </div>
  )})