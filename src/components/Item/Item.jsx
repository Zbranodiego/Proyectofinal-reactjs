import { Link } from "react-router-dom"

export const Item = ({ producto }) => {
    return (



        <div className="card w-25">
            <Link to={`/detail/${producto.id}`}>
                <img src={producto.foto} className="card-img-top w-100" alt='imagen' />

            </Link>
            <div className="card-body">
                <label >{producto.name} </label>
                <br />
                <label >{producto.price}$ </label>

                <br />
                <label > Disponible{producto.stock} </label>
            </div>
        </div>
        


    )
}
