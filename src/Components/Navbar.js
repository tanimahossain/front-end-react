import {
    AiOutlineLogin,
    AiOutlineLogout,
    // eslint-disable-next-line prettier/prettier
    AiOutlineUser
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../appLogo.png';
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
}
function toUser() {
    const userUrl =
        '/users/' + localStorage.getItem('userName');
    return <Navigate to={userUrl} />;
}
function User() {
    const url =
        '/users/' + localStorage.getItem('userName');
    return (
        <>
            <Link
                to="/auth"
                className="navSignUpLogIn"
                onClick={LogOut}
            >
                <span className="icon">
                    <AiOutlineLogout />
                </span>
                LogOut
            </Link>
            <Link
                to={url}
                className="navSignUpLogIn"
                onClick={toUser}
            >
                <span className="icon">
                    <AiOutlineUser />
                </span>
                {localStorage.getItem('userName')}
            </Link>
        </>
    );
}

function Navbar() {
    const loggedIn = localStorage.getItem('loggedIn');
    const auth = loggedIn ? (
        <User userName={localStorage.getItem('userName')} />
    ) : (
        <SignUpLogIn />
    );
    return (
        <div>
            <nav>
                <Link to="/" className="noUnderLine">
                    <img src={logo}></img>
                </Link>
                {auth}
            </nav>
        </div>
    );
}

export default Navbar;
