import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar.js';
import Profile from '../Components/Profile.js';
import UserSpecificStoryList from '../Components/UserSpecificStoryList.js';
function ProfilePage() {
    const userIdParams = useParams();
    return (
        <div>
            <Navbar user={false} />
            <Profile userId={userIdParams.id} />
            <UserSpecificStoryList
                userName={userIdParams.id}
            />
        </div>
    );
}

export default ProfilePage;
