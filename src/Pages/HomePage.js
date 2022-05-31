import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import Navbar from '../Components/Navbar.js';
import Stories from '../Components/StoryList.js';
function App() {
    useEffect(() => {
        if (localStorage.getItem('successAlert')) {
            //toast.success(localStorage.getItem('successAlert'));
            localStorage.removeItem('successAlert');
        }
    }, []);
    const params = useParams();
    console.log(
        'params',
        params,
        localStorage.getItem('successAlert')
    );
    if (localStorage.getItem('successAlert')) {
        toast.success(localStorage.getItem('successAlert'));
        //localStorage.removeItem('successAlert');
    }
    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
            />
            <Navbar user={false} />
            <Stories />
        </div>
    );
}
export default App;
