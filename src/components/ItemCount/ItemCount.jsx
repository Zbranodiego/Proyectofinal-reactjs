import { useCount } from "../../hooks/useCount"
export const ItemCount = ({onAdd}) => {
  const {contador , increment,decrement} = useCount ( 11 , 10 , 1)
  function handleOnAdd (){
    onAdd(contador)
  }
  return (
    <div>
      <button  className="btn btn-secondary" onClick={increment}>+</button>
      <br /><br />
      <label>{contador}</label>
      <br /><br />
      <button className="btn btn-secondary" onClick={decrement}>-</button>
      <br /><br />
      <button className="btn btn-secondary" onClick={handleOnAdd}>AGREGAR AL CARRITO</button>
    </div>
  )

}

