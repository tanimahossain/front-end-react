import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAlertContext } from '../Components/AlertContext';
import Profile from '../Components/Profile.js';
import UserSpecificStoryList from '../Components/UserSpecificStoryList.js';
function ProfilePage() {
    const userIdParams = useParams();
    const { successAlert, setAlert, resetAlert } =
        useAlertContext();
    if (!successAlert) {
        setTimeout(
            () => setAlert('success', 'Welcome'),
            100
        );
        //setAlert('success', 'Welcome');
        //toast.success(successAlert);
        console.log('ss', successAlert);
        //setTimeout(() => resetAlert('success'), 2100);
        //resetAlert('success');
    }
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
            />
            <Profile userId={userIdParams.id} />
            <UserSpecificStoryList
                userName={userIdParams.id}
            />
        </>
    );
}

export default ProfilePage;
