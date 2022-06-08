import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/Profile.css';
import AllContext from './AllContext';
export default class UserButtons extends Component {
    static contextType = AllContext;
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            doRedirect: false,
        };
    }
    handleDeleteChange = async () => {
        const { LogOut } = this.context;
        const user = {};
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token',
                    false
                )}`,
            },
        };
        const baseUrl = '/api/v1/users/';
        //const navigate = useNavigate();
        try {
            this.setState({ loading: true });
            await axios.delete(baseUrl, config, user);
            this.setState({ loading: false });
            LogOut();
            alert('User deleted!');

            this.setState({ doRedirect: true });
        } catch {
            //console.log(err);
        }
    };
    render() {
        const { isLoggedIn } = this.context;
        if (!isLoggedIn) return;
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
