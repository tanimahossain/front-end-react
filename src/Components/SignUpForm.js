import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
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
            loading: false,
            doRedirect: false,
            error: '',
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
            this.setState({
                error: "Passwords doesn't match each other",
            });
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
        try {
            this.setState({
                loading: true,
            });
            const response = await axios.post(
                baseUrl,
                user
            );
            localStorage.setItem(
                'userName',
                response.data.userName
            );
            localStorage.setItem(
                'token',
                response.data.token
            );
            localStorage.setItem('loggedIn', true);
            alert('User Created Succesfully');
            this.setState({
                doRedirect: true,
            });
        } catch (err) {
            console.log(err.response.data.message);
            this.setState({
                error: err.response.data.message,
            });
        }
        this.setState({
            loading: false,
        });
    };
    render() {
        if (
            this.state.doRedirect ||
            localStorage.getItem('loggedIn')
        ) {
            window.open('/', '_self');
            return <Navigate to="/" />;
        }
        return (
            <>
                <form onSubmit={this.handleSubmitChange}>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.userName}
                        name="userName"
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={this.state.fullName}
                        name="fullName"
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.eMail}
                        name="eMail"
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleFieldChange}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        onChange={this.handleFieldChange}
                    />
                    <button type="submit">Sign Up</button>

                    {this.state.error && (
                        <div
                            name="error box"
                            className="errorAlertBox"
                            wrap="hard"
                        >
                            {this.state.error}
                        </div>
                    )}
                </form>
            </>
        );
    }
}
