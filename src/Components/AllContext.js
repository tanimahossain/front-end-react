import React, { Component } from 'react';
const AllContext = React.createContext();

// export function useAllContext() {
//     return useContext(AllContext);
// }
//static contextType = AllContext
export class AllProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            successAlert: '',
            errorAlert: '',
            doRedirect: false,
            isLoggedIn: localStorage.getItem('isLoggedIn'),
            userName: localStorage.getItem('userName'),
            token: localStorage.getItem('token'),
        };
    }
    setRedirect = (val) => {
        this.setState({
            doRedirect: val,
        });
    };
    LogOut = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        this.setState({
            isLoggedIn: false,
            userName: '',
            token: '',
        });
    };
    setAuth = (flag, uname, jwtToken) => {
        localStorage.setItem('isLoggedIn', flag);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('userName', uname);
        this.setState({
            isLoggedIn: flag,
            userName: uname,
            token: jwtToken,
        });
        console.log(
            this.state.isLoggedIn,
            this.state.userName,
            this.state.token
        );
    };
    setAlert = (name, value) => {
        if (name === 'loading') {
            this.setState({
                isLoading: value,
            });
        } else if (name === 'success') {
            this.setState({
                successAlert: value,
            });
        } else {
            this.setState({
                errorAlert: value,
            });
        }
    };
    getAlert = (name) => {
        if (name === 'loading') {
            return this.state.isLoading;
        } else if (name === 'success') {
            return this.state.successAlert;
        } else {
            return this.state.errorAlert;
        }
    };
    render() {
        const {
            isLoading,
            successAlert,
            errorAlert,
            isLoggedIn,
            userName,
            token,
            doRedirect,
        } = this.state;
        const {
            setAlert,
            getAlert,
            LogOut,
            setAuth,
            setRedirect,
        } = this;
        return (
            <AllContext.Provider
                value={{
                    isLoading,
                    successAlert,
                    errorAlert,
                    isLoggedIn,
                    userName,
                    token,
                    doRedirect,
                    setAlert,
                    getAlert,
                    setAuth,
                    LogOut,
                    setRedirect,
                }}
            >
                {this.props.children}
            </AllContext.Provider>
        );
    }
}
export default AllContext;
