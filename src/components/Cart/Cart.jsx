import PropTypes from 'prop-types';

import './cart.css'
const Cart = ({cart,handleRemoveItem}) => {
    return (
        <div>
           <h3>Cart:{cart.length}</h3>
           <div className="bottol-container">
            {cart.map(bottol =>
                <div key={bottol.id}>
                <img  src={bottol.img}></img>
                <button onClick={() => handleRemoveItem(bottol.id)}>remove</button>
                </div>
                )}
           </div>
        </div>
    );
};


Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveItem: PropTypes.array.isRequired
}
export default Cart;



// error hanle
//import PropTypes from 'prop-types';
// Cart.propTypes ={
//      cart: PropTypes.array.isRequired
//      handleRemoveItem: PropTypes.array.isRequired
// }