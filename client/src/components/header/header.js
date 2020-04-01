import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/utils/firebase'
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cartDropdown';

import { ReactComponent as Logo } from '../../assets/crown-logo.svg' 

import './header.modules.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);