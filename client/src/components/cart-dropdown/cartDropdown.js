import React from 'react';
import CustomButton from '../custom-button/customButton';

import './cart-dropdown.modules.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;