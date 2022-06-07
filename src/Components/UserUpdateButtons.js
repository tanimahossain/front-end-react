import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/Profile.css';
import ErrorAlert from './ErrorAlert.js';
import Loading from './Loading';
export default class PostStoryButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            fullName: '',
            password: '',
            confirm: '',
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
    handleUpdateChange = async (event) => {
        event.preventDefault();
        if (
            this.state.password &&
            this.state.password !==
                this.state.confirmPassword
        ) {
            this.setState({
                error: "Passwords doesn't match each other",
            });
            return;
        }
        if (
            (this.state.password &&
                !this.state.confirmPassword) ||
            (!this.state.password &&
                this.state.confirmPassword)
        ) {
            this.setState({
                error: "Passwords doesn't match each other",
            });
            return;
        }
        let story = {};
        if (this.state.fullName) {
            story = {
                fullName: this.state.fullName,
            };
        }
        if (this.state.password) {
            story.password = this.state.password;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token'
                )}`,
            },
        };
        const baseUrl = '/api/v1/users/';
        //const navigate = useNavigate();
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            this.setState({
                loading: true,
            });
            console.log('update call');
            const response = await axios.put(
                baseUrl,
                story,
                config
            );
            console.log(response);
            if (response.data.token) {
                localStorage.setItem(
                    'token',
                    response.data.token
                );
            }
            this.setState({
                doRedirect: true,
                error: '',
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
        const baseUrl = localStorage.getItem('loggedIn')
            ? '/users/' + localStorage.getItem('userName')
            : '/homepage';
        //const baseUrl = '/homepage';
        console.log(
            baseUrl,
            this.state.doRedirect,
            this.state.loading,
            localStorage.getItem('userName')
        );
        if (this.state.doRedirect) {
            this.setState({
                doRedirect: false,
            });
            return <Navigate to={baseUrl} />;
        }
        return (
            <>
                {this.state.loading && <Loading />}
                <div className="container">
                    <div className="storyDetails">
                        <div className="story-info">
                            <form
                                onSubmit={
                                    this.handleUpdateChange
                                }
                            >
                                <label>
                                    Change Full Name
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Full Name"
                                    name="fullName"
                                    className="userUpdateInputBox"
                                    onChange={
                                        this
                                            .handleFieldChange
                                    }
                                    wrap="hard"
                                />
                                <label>
                                    Change Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="userUpdateInputBox"
                                    onChange={
                                        this
                                            .handleFieldChange
                                    }
                                    wrap="hard"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    className="userUpdateInputBox"
                                    onChange={
                                        this
                                            .handleFieldChange
                                    }
                                    wrap="hard"
                                />
                                <Link to={baseUrl}>
                                    <button className="Cancelbtn">
                                        Cancel
                                    </button>
                                </Link>
                                <button className="UpdateStorybtn">
                                    Update User
                                </button>
                                <ErrorAlert
                                    error={this.state.error}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
