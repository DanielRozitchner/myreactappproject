import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  ItemDetail  from "../ItemDetail/ItemDetail"; 
import { doc, getFirestore, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const {id} = useParams();
    const [item, setItem] = useState({});
  
    useEffect(() => {
      const db = getFirestore()
      const queryDb = doc(db,  'productos', id)
      getDoc(queryDb)
      .then(resp => setItem( {id: resp.id, ...resp.data() } ))
      
      
  },[id])
    return (
      <div>
        <ItemDetail item={item} /> 
        </div> 
      )  
  }
export default ItemDetailContainer
