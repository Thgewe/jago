import React from 'react';
import cl from './signInPage.module.scss';
import AuthForm from "../../components/AuthForm/AuthForm";
import Background from "../../components/Background/Background";

const SignInPage = () => {
    return (
        <div className={cl.page}>
            <Background />
            <AuthForm isSignIn={true}/>
        </div>
    );
};

export default SignInPage;