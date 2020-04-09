import React from 'react';
import { connect } from 'react-redux';
import  { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/actions/cart';
import { selectCartItemsCount } from '../../redux/selectors/cartSelector';
import { selectCurrentUser } from '../../redux/selectors/userSelector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon.svg'

import './cart-icon.modules.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(<div className='cart-icon' onMouseEnter={toggleCartHidden} onMouseLeave={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
    );
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount,
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 

// if()