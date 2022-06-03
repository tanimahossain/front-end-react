import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useAlertContext } from '../Components/AlertContext';
import Navbar from '../Components/Navbar.js';
import Footer from './Footer';
function Layout(props) {
    const { successAlert, resetAlert } = useAlertContext();
    console.log('ss', successAlert);
    if (successAlert) {
        toast.success(successAlert);
        setTimeout(() => resetAlert('success'), 2100);
        //resetAlert('success');
    }
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
            />
            <Navbar />
            <div className="navDiv"></div>
            {props.children}
            <Footer />
        </>
    );
}
export default Layout;
