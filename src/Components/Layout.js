import React, { Component } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// <ToastContainer
//     position="bottom-center"
//     autoClose={2000}
// />
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import AlertContext from './AlertContext';
import Footer from './Footer';
import Navbar from './Navbar';
class Layout extends Component {
    static contextType = AlertContext;
    constructor(props) {
        super(props);
        this.state = {
            userName: localStorage.getItem('userName'),
            isLoggedIn: localStorage.getItem('loggedIn'),
            token: localStorage.getItem('token'),
        };
    }
    componentDidMount() {
        this.setState({
            userName: localStorage.getItem('userName'),
            loggedIn: localStorage.getItem('loggedIn'),
            token: localStorage.getItem('token'),
        });
    }
    render() {
        return (
            <>
                <Navbar
                    isLoggedIn={this.state.isLoggedIn}
                />
                <div className="navDiv"></div>
                {this.props.children}
                <Footer />
            </>
        );
    }
}
export default Layout;
/*
                {this.props.children}
                {React.cloneElement(this.props.children, {
                    setAuth: this.setAuth,
                })}

*/
