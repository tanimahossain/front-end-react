//import Navbar from '../Components/Navbar.js';
//import SignUpForm from '../Components/SignUpForm.js';
import React, { Component } from 'react';
import '../App.css';
import '../styles/InputText.css';
export default class SignUp extends Component {
    render() {
        return (
            <form>
                <div>
                    <label
                        for="userName"
                        className="labelColor"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                    />
                </div>
                <div>
                    <label
                        for="fullName"
                        className="labelColor"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                    />
                </div>
                <div>
                    <label
                        for="eMail"
                        className="labelColor"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <label className="labelColor">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div>
                    <label className="labelColor">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        );
    }
}
