import { memo } from "react"
import { Link } from "react-router-dom"


export const Item = memo(({ producto }) => {
    console.log('Item')
    return (
        <div className="card w-25">

            <Link to={`/detail/${producto.id}`}>
                <img src={producto.foto} className="card-img-top w-100" alt='imagen' />
                <div className="card-body">
                    <label >  {producto.name} </label>
                    <br />
                    <label >  {producto.price}$</label>

                </div>
            </Link>

        </div >
    )
}

)
