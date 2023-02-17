import React from 'react';
import cl from './signUpPage.module.scss';
import AuthForm from "../../components/AuthForm/AuthForm";

const SignUpPage = () => {
    return (
        <div className={cl.page}>
            <AuthForm isSignIn={false}/>
        </div>
    );
};

export default SignUpPage;