//import Navbar from '../Components/Navbar.js';
//import SignUpForm from '../Components/SignUpForm.js';
import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/InputText.css';
export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
        };
    }
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmitChange = async (event) => {
        event.preventDefault();
        const user = {
            userName: this.state.userName,
            password: this.state.password,
        };
        const baseUrl = '/api/v1/users/logIn';
        await axios
            .post(baseUrl, user)
            .then((response) => {
                //console.log(response);
                //console.log(response);
                localStorage.setItem(
                    'userName',
                    response.data.userName
                );
                localStorage.setItem(
                    'token',
                    response.data.token
                );
                localStorage.setItem('loggedIn', true);
                //alert('user loggedIn successfully');
                window.location.reload();
            })
            .catch((err) => {
                //console.log(err);
            });
    };
    render() {
        if (localStorage.getItem('loggedIn')) {
            return <Navigate to="/" />;
        }
        return (
            <form>
                <div>
                    <label className="labelColor">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.userName}
                        name="userName"
                        onChange={this.handleFieldChange}
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
                        value={this.state.password}
                        name="password"
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={this.handleSubmitChange}
                    >
                        Log In
                    </button>
                </div>
            </form>
        );
    }
}
