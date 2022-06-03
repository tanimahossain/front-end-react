import React, { useContext, useState } from 'react';
const AlertContext = React.createContext();

export function useAlertContext() {
    return useContext(AlertContext);
}

export function AlertProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [successAlert, setSuccessAlert] =
        useState('welcome');
    const [errorAlert, setErrorAlert] = useState('');
    function setAlert(name, value) {
        if (name === 'loading') {
            setLoading(value);
        } else if (name === 'success') {
            setSuccessAlert(value);
        } else {
            setErrorAlert(value);
        }
    }
    function getAlert(name) {
        if (name === 'loading') {
            return loading;
        } else if (name === 'success') {
            return successAlert;
        } else {
            return errorAlert;
        }
    }
    function resetAlert(name) {
        if (name === 'loading') {
            setLoading(false);
        } else if (name === 'success') {
            setSuccessAlert('');
        } else {
            setErrorAlert('');
        }
    }
    const value = {
        loading,
        successAlert,
        errorAlert,
        setAlert,
        getAlert,
        resetAlert,
    };
    return (
        <AlertContext.Provider value={value}>
            {children}
        </AlertContext.Provider>
    );
}
