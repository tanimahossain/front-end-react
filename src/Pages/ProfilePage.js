import { useParams } from 'react-router-dom';
import Profile from '../Components/Profile.js';
import UserSpecificStoryList from '../Components/UserSpecificStoryList.js';
function ProfilePage() {
    const userIdParams = useParams();
    return (
        <div>
            <Profile userId={userIdParams.id} />
            <UserSpecificStoryList
                userName={userIdParams.id}
            />
        </div>
    );
}

export default ProfilePage;
