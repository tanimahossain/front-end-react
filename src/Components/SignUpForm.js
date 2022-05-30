import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/InputText.css';
export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            fullName: '',
            eMail: '',
            password: '',
            confirmPassword: '',
        };
    }
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleSubmitChange = async (event) => {
        event.preventDefault();
        if (
            this.state.password !==
            this.state.confirmPassword
        ) {
            alert("passwords doesn't match");
            return;
        }
        const user = {
            userName: this.state.userName,
            fullName: this.state.fullName,
            eMail: this.state.eMail,
            password: this.state.password,
        };
        //console.log(this.state);
        const baseUrl = '/api/v1/users/';
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
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
                alert('user created successfully');
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
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        name="fullName"
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div>
                    <label className="labelColor">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.eMail}
                        name="eMail"
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
                    <label className="labelColor">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        onChange={this.handleFieldChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={this.handleSubmitChange}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        );
    }
}
