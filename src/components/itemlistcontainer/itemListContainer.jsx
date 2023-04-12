import './itemlistc.css'
import { useEffect, useState } from 'react'
import { Filter } from '../Filter/Filter'
import { useParams } from 'react-router-dom'
import { mockFetch } from '../../utils/mockFetch'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const { cid } = useParams()
    
    useEffect(() => {
        if (cid) {
            mockFetch()
                .then(resp => setProductos(resp.filter(prod => prod.categoria === cid)))
        } else {

            mockFetch()
                .then(resp => setProductos(resp))
                
        }
    }, [cid])

    const handleProductsFiltered = ({ filterState, handleFilterChange }) => (

        <div>
            
            
            <ItemList
                productos={
                    filterState == '' ?
                        productos
                        :
                        productos.filter(producto => producto.name.toLowerCase().includes(filterState.toLowerCase()))
                } />
        </div>
    )
    return (
        <>
            {productos.length != 0 ?
                <Filter>
                    {handleProductsFiltered}
                </Filter>
                :
                <h2>CARGANDO ...</h2>
            }
            <div>

            </div>
        </>
    )
}
