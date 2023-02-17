import React from 'react';
import cl from './signInPage.module.scss';
import AuthForm from "../../components/AuthForm/AuthForm";

const SignInPage = () => {
    return (
        <div className={cl.page}>
            <AuthForm isSignIn={true}/>
        </div>
    );
};

export default SignInPage;