import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ product }) => {

    const onAdd = (cantidad)=>{
        console.log(cantidad)
    }

    return (
        <div className="row">
            <div className="col-6">
                <img src={product.foto} className="w-25"/>
                <h3>NOMBRE {product.name}</h3>
                <h4>PRECIO {product.price}</h4>
                <h4>CATEGORIA {product.categoria}</h4>
            </div>
            <div className="col-6">
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </div>

        </div>
    )
}
