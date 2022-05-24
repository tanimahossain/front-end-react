//import Navbar from '../Components/Navbar.js';
//import SignUpForm from '../Components/SignUpForm.js';
import React, { Component } from 'react';
import '../App.css';
import '../styles/Profile.css';
export default class UserButtons extends Component {
    render() {
        return (
            <div>
                <button className="CreateStorybtn">
                    Create Story
                </button>
                <button className="UpdateUserbtn">
                    Update User
                </button>
                <button className="DeleteUserbtn">
                    Delete User
                </button>
            </div>
        );
    }
}
