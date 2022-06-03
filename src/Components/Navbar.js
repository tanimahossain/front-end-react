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
        <NavLink
            as={Link}
            to="/auth"
            className="navSignUpLogIn"
        >
            <span className="icon">
                <AiOutlineUser />
            </span>
            SignUp/
            <span className="icon">
                <AiOutlineLogin />
            </span>
            LogIn
        </NavLink>
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
            <NavLink
                as={Link}
                to="/auth"
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
                onClick={toUser}
            >
                <span className="icon">
                    <AiOutlineUser />
                </span>
                {localStorage.getItem('userName')}
            </NavLink>
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
                <NavLink
                    as={Link}
                    to="/homepage"
                    className="appLogoWrap"
                >
                    <img src={logo} />
                    <span className="appLogo">
                        Euphorolog
                    </span>
                </NavLink>
                {auth}
            </nav>
        </div>
    );
}

export default Navbar;
