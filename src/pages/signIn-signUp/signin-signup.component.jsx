import React from 'react'
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/sign-up.components';
import './signin-signup.styles.scss';
const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-sing-up'>
            <SignIn />
            <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage; 
