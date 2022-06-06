import axios from 'axios';
import React, { Component } from 'react';
//import { Navigate } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import '../App.css';
import UserButtons from '../Components/UserButtons.js';
import UserFullName from '../Components/UserFullName.js';
import '../styles/Profile.css';
import Loading from './Loading';
function getButtons(props) {
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem('loggedIn');
    if (
        loggedIn &&
        localStorage.getItem('userName') ==
            props.user.userName
    ) {
        return <UserButtons navigate={navigate} />;
    }
    return;
}
function PrintAUser(props) {
    if (!props.user.userName) {
        //return <Navigate to="/" />;
    }
    return (
        <div className="container bottonBorder">
            <div className="userDetails">
                <div className="user">
                    <div className="user-preview">
                        <div className="story-info">
                            <UserFullName
                                user={props.user}
                            />
                        </div>
                    </div>
                    {getButtons(props)}
                </div>
            </div>
        </div>
    );
}

class Profile extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            ViewList: {},
            userId: props.userId,
            doRedirect: false,
            error: '',
            loading: false,
        };
    }
    async componentDidMount() {
        const baseUrl =
            '/api/v1/users/' + this.state.userId;
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            this.setState({ loading: true });
            const response = await axios.get(baseUrl);
            this.setState({
                ViewList: response.data.userData,
            });
        } catch (err) {
            this.setState({
                doRedirect: true,
            });
        }
        this.setState({ loading: false });
    }
    render() {
        const { ViewList } = this.state;
        if (this.state.doRedirect) {
            return <Navigate to="/" />;
        }
        return (
            <>
                <Loading loading={this.state.loading} />
                <PrintAUser user={ViewList} />
            </>
        );
    }
}
export default Profile;
