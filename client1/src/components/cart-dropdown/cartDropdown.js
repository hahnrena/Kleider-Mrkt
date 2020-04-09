import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/customButton';
import CartItem from '../cart-item/cartItem';
import { selectCartItems } from '../../redux/selectors/cartSelector';
import { toggleCartHidden } from '../../redux/actions/cart';

import './cart-dropdown.modules.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <div className='cart-dropdown' onMouseEnter={toggleCartHidden} onMouseLeave={toggleCartHidden}>
        <div className='cart-items'>
            {   
                cartItems.length ? 
                cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
                ))
                : (
                <span className='empty-message'>Your Cart Is Empty</span>
                )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            toggleCartHidden()}
        }>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));