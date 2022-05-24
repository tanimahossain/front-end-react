import { FaArrowRight, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../appLogo.png';
function SignUpLogIn() {
    return (
        <Link to="/auth" className="navSignUpLogIn">
            <span className="icon">
                <FaRegUser />
            </span>
            SignUp/
            <span className="icon">
                <FaArrowRight />
            </span>
            LogIn
        </Link>
    );
}
function User(props) {
    const url = '/' + props.userName;
    return (
        <Link to={url} className="navSignUpLogIn">
            <span className="icon">
                <FaRegUser />
            </span>
            {props.userName}
        </Link>
    );
}

function Navbar(props) {
    const auth = props.user ? (
        <User
            userName={'Tania Hossain blah blah blah'}
            dropdown={true}
        />
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
