import React from 'react';
import cl from './signUpPage.module.scss';
import AuthForm from "../../components/AuthForm/AuthForm";
import Background from "../../components/Background/Background";

const SignUpPage = () => {
    return (
        <div className={cl.page}>
            <Background />
            <AuthForm isSignIn={false}/>
        </div>
    );
};

export default SignUpPage;