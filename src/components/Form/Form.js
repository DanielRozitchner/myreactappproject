import { useState } from 'react'
import { addDoc, collection, getFirestore, Timestamp, writeBatch, doc} from 'firebase/firestore'
import { useCartContext } from "../../context/CartContext"
import PlaneForm from './PlaneForm'


function Form({removeCart, totalPrice}) {
    const { cartList } = useCartContext([])
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", lastname:"", email:"", emailVal:"", phone:""
    })
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const validate = (values) => {
        const errors = {}
        const regexMail = /^[^\s@]+@[^\@]+\.[^\s@]{2,}$/i;
        const regexPhone = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
        const regexName = /^[a-z ,.'-]+$/i;
        if (!values.name) {
            errors.name = "El nombre es requerido!";
        } else if (!regexName.test(values.name)){
            errors.name = "El nombre no es válido"
        }
        if (!values.lastname) {
            errors.lastname = "El apellido es requerido!";
        } else if (!regexName.test(values.lastname)){
            errors.lastname = "El apellido no es válido"
        }
        if (!values.email) {
            errors.email = "El email es requerido!";
        } else if (!regexMail.test(values.email)){
            errors.email = "El email no es válido"
        }
        if (!values.emailVal) {
            errors.emailVal = "El email es requerido!";
        } else if (values.email !== values.emailVal){
            errors.emailVal = "El email no coincide con el campo correspondiente!"
        }
        if (!values.phone) {
            errors.phone = "El teléfono es requerido!";
        } else if (!regexPhone.test(values.phone)) {
            errors.phone = "El teléfono no es válidoo"
        }  
        return errors;

    }

    const generateOrder = (e) =>{
        e.preventDefault() 
        let errors = validate(dataForm)
        setFormErrors(errors) 
        
        
        // Nuevo objeto de orders
        if (Object.keys(errors).length === 0){    
        let order = {}
        
        order.date = Timestamp.fromDate(new Date())
        order.buyer = dataForm
        order.total = totalPrice();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const cake = cartItem.cake;
            const quant = cartItem.quantity
            const price = cartItem.price * cartItem.quantity;

            
            return {id, cake, price, quant}   
        })

        // Generar la orden 
        const db = getFirestore()
        const orderColeccion = collection(db, 'orders')
        addDoc(orderColeccion, order)
        .then(resp => setIdOrder(resp.id))
        .finally(()=> {
            removeCart()
            setDataForm({
                name:"", lastname:"", email:"", emailVal:"", phone:""
            })
        })

    //actualizacion de stock

        const batch = writeBatch(db)
        
        order.items.forEach(e => {
                let docUpdate = doc(db, 'productos', e.id)
                let currentStock  = cartList.find(item => item.id === e.id).stock
                batch.update( docUpdate, {
                    stock: currentStock - e.quant
                })

            }) 
        batch.commit()



        }
    }


    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <PlaneForm submitOrder={generateOrder} handler={handleChange} formObj={dataForm} errorsObj={formErrors} cartOrder={cartList} />
           {idOrder.length !== 0 &&
                <h3>Tu orden de compra ha sido confirmada con el comprobante Nº: {idOrder}</h3>}
        </div>
    )
} 

export default Form
