import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/Profile.css';
export default class UserButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            doRedirect: false,
        };
    }
    handleDeleteChange = async () => {
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
            this.setState({ loading: true });
            await axios.delete(baseUrl, config, user);
            this.setState({ loading: false });
            alert('User deleted!');
            localStorage.removeItem('userName');
            localStorage.removeItem('token');
            localStorage.removeItem('loggedIn');

            this.setState({ doRedirect: true });
        } catch {
            //console.log(err);
        }
    };
    render() {
        if (this.state.doRedirect) {
            this.setState({ doRedirect: false });
            return <Navigate to="/" />;
        }
        return (
            <>
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
                        onClick={() =>
                            this.handleDeleteChange
                        }
                    >
                        Delete User
                    </button>
                </div>
            </>
        );
    }
}
