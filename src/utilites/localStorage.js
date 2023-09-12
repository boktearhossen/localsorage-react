

const getStoredCart = () => {
    const cartString = localStorage.getItem('cart')
    if(cartString){
        return JSON.parse(cartString)
    }
    return []
}

// save item localstorage
const saveCartToLS = cart => {
    const cartStringifyed = JSON.stringify(cart)
    localStorage.setItem('cart' , cartStringifyed)
}


const addToLS = id => {
    const cart = getStoredCart()
    cart.push(id)
    saveCartToLS(cart)
}

const removeFromLS = (id) => {
    const cart = getStoredCart()
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLS(remaining)
}


export {addToLS, getStoredCart,removeFromLS}