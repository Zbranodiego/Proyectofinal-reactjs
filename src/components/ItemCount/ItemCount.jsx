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
 /* <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */