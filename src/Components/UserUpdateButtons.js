import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Profile.css';
export default class PostStoryButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            fullName: '',
            password: '',
            confirm: '',
        };
    }
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleUpdateChange = async () => {
        if (
            (this.state.password ||
                this.state.confirmPassword) &&
            this.state.password !=
                this.state.confirmPassword
        ) {
            alert("Passwords doesn't match each other");
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
            const response = await axios.put(
                baseUrl,
                story,
                config
            );
            if (response.data.token) {
                localStorage.setItem(
                    'token',
                    response.data.token
                );
            }
            window.open(
                '/users/' +
                    localStorage.getItem('userName'),
                '_self'
            );
        } catch (err) {
            //console.log(err);
        }
    };
    render() {
        const baseUrl = localStorage.getItem('loggedIn')
            ? '/users/' + localStorage.getItem('userName')
            : '/homepage';
        return (
            <div className="container">
                <div className="storyDetails">
                    <div className="story-info">
                        <form
                            onSubmit={
                                this.handleUpdateChange
                            }
                        >
                            <label>Change Full Name</label>
                            <textarea
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                className="userUpdateInputBox"
                                onChange={
                                    this.handleFieldChange
                                }
                                wrap="hard"
                            />
                            <label>Change Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="userUpdateInputBox"
                                onChange={
                                    this.handleFieldChange
                                }
                                wrap="hard"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                className="userUpdateInputBox"
                                onChange={
                                    this.handleFieldChange
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
