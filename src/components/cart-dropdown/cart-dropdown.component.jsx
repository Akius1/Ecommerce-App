import React from 'react';
import CustomButton from '../custom-button/custum-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'></div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}
 
export default CartDropdown;
