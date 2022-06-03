import { useParams } from 'react-router-dom';
import { useAlertContext } from '../Components/AlertContext';
import Profile from '../Components/Profile.js';
import UserSpecificStoryList from '../Components/UserSpecificStoryList.js';
function ProfilePage() {
    const userIdParams = useParams();
    const { successAlert, setAlert, resetAlert } =
        useAlertContext();
    return (
        <>
            <Profile userId={userIdParams.id} />
            <UserSpecificStoryList
                userName={userIdParams.id}
            />
        </>
    );
}

export default ProfilePage;
