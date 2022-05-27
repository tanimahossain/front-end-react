import axios from 'axios';
import React, { Component } from 'react';
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import UserButtons from '../Components/UserButtons.js';
import UserFullName from '../Components/UserFullName.js';
import '../styles/Profile.css';
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
    console.log(props.user.userName, !props.user.userName);
    if (!props.user.userName) {
        //return <Navigate to="/" />;
    }
    return (
        <div className="wrap">
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
        };
    }
    componentDidMount = async () => {
        const baseUrl =
            '/api/v1/users/' + this.state.userId;
        await axios
            .get(baseUrl)
            .then((response) => {
                //console.log(response);
                this.setState({
                    ViewList: response.data.userData,
                });
            })
            .catch((err) => {
                //window.location.reload();
            });
    };
    render() {
        const { ViewList } = this.state;
        return <PrintAUser user={ViewList} />;
    }
}
export default Profile;
