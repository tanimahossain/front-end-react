import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import UserButtons from '../Components/UserButtons.js';
import UserFullName from '../Components/UserFullName.js';
import '../styles/Profile.css';
function PrintAUser(props) {
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
                        <UserButtons />
                    </div>
                </div>
            </div>
        </div>
    );
}

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ViewList: {},
            userId: props.userId,
        };
    }
    componentDidMount() {
        const baseUrl =
            '/api/v1/users/' + this.state.userId;
        axios
            .get(baseUrl)
            .then((response) => {
                //console.log(response);
                this.setState({
                    ViewList: response.data.userData,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const { ViewList } = this.state;
        console.log(ViewList);
        return <PrintAUser user={ViewList} />;
    }
}
export default Profile;
