//import Navbar from '../Components/Navbar.js';
//import SignUpForm from '../Components/SignUpForm.js';
import React, { Component } from 'react';
import '../App.css';
import '../styles/InputText.css';
export default class LogIn extends Component {
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
                    <button type="submit">Log In</button>
                </div>
            </form>
        );
    }
}
