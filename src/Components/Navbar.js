import { FaArrowRight, FaRegUser } from 'react-icons/fa';
import {
    IoIosArrowDropdownCircle,
    // eslint-disable-next-line prettier/prettier
    IoIosArrowDropupCircle
} from 'react-icons/io';
import '../App.css';
import logo from '../appLogo.png';
function SignUpLogIn() {
    return (
        <a href="/homepage" className="navSignUpLogIn">
            <span className="icon">
                <FaRegUser />
            </span>
            SignUp/
            <span className="icon">
                <FaArrowRight />
            </span>
            LogIn
        </a>
    );
}
function User(props) {
    const menu = props.dropdown ? (
        <IoIosArrowDropdownCircle />
    ) : (
        <IoIosArrowDropupCircle />
    );
    return (
        <a href="/homepage" className="navSignUpLogIn">
            <span className="icon">
                <FaRegUser />
            </span>
            {props.userName}{' '}
            <span className="icon">{menu}</span>
        </a>
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
                <img src={logo}></img>
                {auth}
            </nav>
        </div>
    );
}

export default Navbar;
