import React, { Component } from 'react';
const AlertContext = React.createContext();

// export function useAlertContext() {
//     return useContext(AlertContext);
// }
//static contextType = AlertContext
export class AlertProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            successAlert: '',
            errorAlert: '',
        };
    }
    setAlert = (name, value) => {
        if (name === 'loading') {
            this.setState({
                loading: value,
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
            return this.state.loading;
        } else if (name === 'success') {
            return this.state.successAlert;
        } else {
            return this.state.errorAlert;
        }
    };
    resetAlert = (name) => {
        if (name === 'loading') {
            this.setState({
                loading: false,
            });
        } else if (name === 'success') {
            this.setState({
                successAlert: '',
            });
        } else {
            this.setState({
                errorAlert: '',
            });
        }
    };
    render() {
        const { loading, successAlert, errorAlert } =
            this.state;
        const { setAlert, getAlert, resetAlert } = this;
        return (
            <AlertContext.Provider
                value={{
                    loading,
                    successAlert,
                    errorAlert,
                    setAlert,
                    resetAlert,
                    getAlert,
                }}
            >
                {this.props.children}
            </AlertContext.Provider>
        );
    }
}
export default AlertContext;
