import { useState,useEffect } from 'react'
import Bottol from '../Bottol/Bottol';
import './Bottols.css'
import { addToLS, getStoredCart, removeFromLS } from '../../utilites/localStorage';
import Cart from '../Cart/Cart';
const Bottols = () => {
const [bottoles, setBottoles] = useState([])
const [cart, setCart] =useState([])
 useEffect(() => {
  fetch('bottol.json')
  .then(res => res.json())
  .then(data => setBottoles(data))
 },[])


// load cart from localStorage
useEffect(() => {
   
   if(bottoles.length){
       const storedCart = getStoredCart()
       const saveCart = []
       for(const id of storedCart){
        const bottol = bottoles.find(bottol => bottol.id === id)
        if(bottol){
            saveCart.push(bottol)
        }
       }

    console.log('fdsdddddd', saveCart);
    setCart(saveCart)
   }
},[bottoles])


 const handleBottole = (bottol) => {
    const newCart = [...cart, bottol]
    setCart(newCart)
    // add item id to local storage
    addToLS(bottol.id)
 }

 // removeitem
const handleRemoveItem = id => {
    //remove from cart
    const remainingCart = cart.filter(bottol => bottol.id !== id)
    setCart(remainingCart)
    // remove from localStorage
   removeFromLS(id)
}




    return (
        <div>
            <h3>bottoles: {bottoles.length}</h3>
             
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
             
            <div className='bottols'>
            {
                bottoles.map(botol => <Bottol handleBottole={handleBottole} key={botol.id} botol={botol}></Bottol>)
            }
            </div>
        </div>
    );
};

export default Bottols;