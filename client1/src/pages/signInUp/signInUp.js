import React from 'react';

import Signin from '../../components/sign-in/Signin'
import Signup from '../../components/sign-up/Signup'

import './signInUp.modules.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <Signup />
    </div>
);

export default SignInAndSignUpPage;