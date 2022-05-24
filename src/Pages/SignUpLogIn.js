//import SignUpForm from '../Components/SignUpForm.js';
import React, { Component } from 'react';
import LogInForm from '../Components/LogInForm.js';
import Navbar from '../Components/Navbar.js';
import SignUpForm from '../Components/SignUpForm.js';
import '../styles/SignUp.css';
export default class SignUp extends Component {
    render() {
        return (
            <>
                <Navbar />
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
