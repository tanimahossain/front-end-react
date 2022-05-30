import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Profile.css';
export default class UserButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    handleDeleteChange = async () => {
        console.log(localStorage.getItem('token'));
        const user = {};
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token',
                    false
                )}`,
            },
        };
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        const baseUrl = '/api/v1/users/';
        //const navigate = useNavigate();
        try {
            await axios.delete(baseUrl, config, user);
            alert('User deleted!');
            localStorage.removeItem('userName');
            localStorage.removeItem('token');
            localStorage.removeItem('loggedIn');
            window.open('/');
        } catch {
            //console.log(err);
        }
    };
    render() {
        return (
            <div>
                <Link to="/stories/">
                    <button className="CreateStorybtn">
                        Create Story
                    </button>
                </Link>
                <Link to="/users/">
                    <button className="UpdateUserbtn">
                        Update User
                    </button>
                </Link>
                <button
                    className="DeleteUserbtn"
                    onClick={this.handleDeleteChange}
                >
                    Delete User
                </button>
            </div>
        );
    }
}
