//import Navbar from '../Components/Navbar.js';
//import SignUpForm from '../Components/SignUpForm.js';
import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/InputText.css';
import Loading from './Loading';
export default class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            loading: false,
            doRedirect: false,
            error: '',
        };
    }
    ResetError = () => {
        this.setState({
            error: 'val',
        });
        console.log(this.state.error);
        return (this.parentElement.style.display = 'none');
    };
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
        try {
            this.setState({ loading: true, error: '' });
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
            this.setState({
                doRedirect: true,
            });
        } catch (err) {
            console.log(err.response.data.message);
            this.setState({
                error: err.response.data.message,
            });
        }
        this.setState({ loading: false });
    };
    render() {
        if (this.state.doRedirect) {
            this.setState({
                doRedirect: false,
            });
            window.open('/', '_self');
            return <Navigate to="/" />;
        }
        return (
            <>
                <form onSubmit={this.handleSubmitChange}>
                    <Loading loading={this.state.loading} />
                    <input
                        required
                        type="text"
                        placeholder="Username"
                        name="userName"
                        onChange={this.handleFieldChange}
                    />

                    <input
                        required
                        type="password"
                        placeholder="Enter password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleFieldChange}
                    />
                    <button type="submit">Log In</button>
                </form>

                {this.state.error && (
                    <div
                        name="errorbox"
                        className="errorAlertBox"
                        wrap="hard"
                    >
                        <span
                            className="closebtn"
                            onclick={this.ResetError}
                        >
                            &times;
                        </span>
                        {this.state.error}
                    </div>
                )}
            </>
        );
    }
}
