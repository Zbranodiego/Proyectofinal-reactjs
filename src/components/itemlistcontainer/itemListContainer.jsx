import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Loading } from "../Loading/Loading"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import './itemlistc.css'
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { cid } = useParams()
    useEffect(() => {
      const db = getFirestore()
      const queryCollection = collection(db, 'Productos react-js')
      if (cid) {
        const queryFilter = query(queryCollection,where('categoria', '==', cid) 
        )
        
        getDocs(queryFilter)
          .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
          .catch(err => console.log(err))
          .finally(() => setIsLoading(false))  

      } else {
         getDocs(queryCollection)
         .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()})  )))
         .catch(err => console.log(err))
         .finally(()=> setIsLoading(false))     
      }
    }, [cid])
  
    return (
      <>
        {isLoading ?
          <Loading />
          :
          <ItemList
            productos={productos} />
        }
      </>
    )
  } 
  