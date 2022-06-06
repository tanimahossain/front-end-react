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
    render() {
        return (
            <>
                <Navbar />
                <div className="navDiv"></div>
                {this.props.children}
                <Footer />
            </>
        );
    }
}
export default Layout;
