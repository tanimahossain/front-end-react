//import { Navigate } from 'react-router-dom';

const LogOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    window.open('/auth', '_self');
    //return <Navigate to="/auth" />;
};

export default LogOut;
