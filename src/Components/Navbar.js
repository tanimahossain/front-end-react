import React, { Component } from 'react';
import {
    AiOutlineLogin,
    AiOutlineLogout,
    // eslint-disable-next-line prettier/prettier
    AiOutlineUser
} from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../appLogo - Copy.png';
function SignUpLogIn() {
    return (
        <Link to="/auth" className="navSignUpLogIn">
            <span className="icon">
                <AiOutlineUser />
            </span>
            SignUp/
            <span className="icon">
                <AiOutlineLogin />
            </span>
            LogIn
        </Link>
    );
}
function LogOut() {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    window.open('/auth', '_self');
}
function User({ userName }) {
    const url = '/users/' + userName;
    console.log('user', url);
    return (
        <>
            <NavLink
                as={Link}
                to="/auth/"
                className="navSignUpLogIn"
                onClick={LogOut}
            >
                <span className="icon">
                    <AiOutlineLogout />
                </span>
                LogOut
            </NavLink>
            <NavLink
                as={Link}
                to={url}
                className="navSignUpLogIn"
            >
                <span className="icon">
                    <AiOutlineUser />
                </span>
                {userName}
            </NavLink>
        </>
    );
}
export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: localStorage.getItem('loggedIn'),
            userName: localStorage.getItem('userName'),
            loading: false,
            doRedirect: false,
            error: '',
        };
    }
    componentDidMount() {
        if (localStorage.getItem('loggedIn')) {
            this.setState({
                loggedIn: true,
                userName: localStorage.getItem('userName'),
            });
        } else {
            this.setState({
                loggedIn: false,
                userName: '',
                doRedirect: true,
            });
        }
    }
    render() {
        console.log('username', this.state.userName);
        const auth = this.state.loggedIn ? (
            <User userName={this.state.userName} />
        ) : (
            <SignUpLogIn />
        );
        console.log(localStorage.getItem('loggedIn'));
        return (
            <div>
                <nav>
                    <Link to="/" className="appLogoWrap">
                        <img src={logo} />
                        <span className="appLogo">
                            Euphorolog
                        </span>
                    </Link>
                    {auth}
                </nav>
            </div>
        );
    }
}
