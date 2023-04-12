import { Item } from "../Item/Item"


export const ItemList = ({ productos }) => {
  let objStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  return (
    <div style={objStyle}>

      {productos.map(producto => <Item key={producto.id} producto={producto} />)}
    </div>


  )
}
