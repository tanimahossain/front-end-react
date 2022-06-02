//import SignUpForm from '../Components/SignUpForm.js';
import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import LogInForm from '../Components/LogInForm.js';
import SignUpForm from '../Components/SignUpForm.js';
import '../styles/SignUp.css';

export default class SignUp extends Component {
    render() {
        if (localStorage.getItem('errorAlert')) {
            toast.error(localStorage.getItem('errorAlert'));
            localStorage.removeItem('errorAlert');
        }
        return (
            <>
                <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                />
                <div className="SignUpLogInBox">
                    <div className="sideBorder">
                        <div className="wrapSignUpLogIn">
                            <h3 className="boxTitle">
                                Sign Up
                            </h3>
                            <SignUpForm />
                        </div>
                    </div>
                    <div>
                        <div className="wrapSignUpLogIn">
                            <h3 className="boxTitle">
                                Log In
                            </h3>
                            <LogInForm />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
