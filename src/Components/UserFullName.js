import { Link } from 'react-router-dom';
import '../App.css';

function UserFullName(props) {
    const userUrl = '/users/' + props.user.userName;
    console.log(userUrl);
    return (
        <div className="storyTitle">
            <h3>
                Full Name:{' '}
                <Link to={userUrl} className="noUnderLine">
                    {props.user.fullName}
                </Link>
            </h3>
            <h3>
                Username:{' '}
                <Link to={userUrl} className="noUnderLine">
                    {props.user.userName}
                </Link>
            </h3>
            <h3>
                Email:&emsp;&emsp;&ensp;
                {props.user.eMail}
            </h3>
        </div>
    );
}

export default UserFullName;
