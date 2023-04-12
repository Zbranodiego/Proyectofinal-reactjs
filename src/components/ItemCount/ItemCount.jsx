import { useCount } from "../../hooks/UseCount"


export const ItemCount = ({onAdd}) => {
  
  const {contador , increment,decrement } = useCount()

  function handleOnAdd (){
    onAdd(contador)
  }



  return (
    <div className="card text-bg-secondary mb-3">
      <div className="card-body">
      <button className="btn btn-outline-dark" onClick={increment}>+</button>
      <label>{contador}</label>
      <button className="btn btn-outline-dark" onClick={decrement}>-</button>
      <br /><hr />
      <button className="btn btn-outline-dark" onClick={handleOnAdd}>AGREGAR AL CARRITO</button>

      </div>
    </div>
  )

}
