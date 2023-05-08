import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDocument = doc(dbFirestore, 'Productos react-js', pid)
        getDoc(queryDocument)
        .then(resp => setProduct ( {id : resp.id, ... resp.data()}))
        .catch(error=> console.log(error))
        .finally(()=>setIsLoading(false))
    }, [])
    return (
        <>
            {
                isLoading ? 
                
                <Loading/>
                :
                <ItemDetail product={product}/>

            }
        </>
    )
}
