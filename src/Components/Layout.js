import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import Navbar from '../Components/Navbar.js';
import Footer from './Footer';
function Layout(props) {
    return (
        <>
            <Navbar />
            <div className="navDiv"></div>
            {props.children}
            <Footer />
        </>
    );
}
export default Layout;
