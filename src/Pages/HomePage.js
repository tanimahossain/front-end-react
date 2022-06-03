import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useAlertContext } from '../Components/AlertContext';
import Stories from '../Components/StoryList.js';
function HomePage() {
    const { successAlert, resetAlert } = useAlertContext();
    console.log('ss', successAlert);
    if (successAlert) {
        toast.success(successAlert);
        //setTimeout(() => resetAlert('success'), 2100);
        //resetAlert('success');
    }
    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
            />
            <Stories />
        </div>
    );
}
export default HomePage;
