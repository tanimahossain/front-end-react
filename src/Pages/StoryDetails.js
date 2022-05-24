import { useParams } from 'react-router-dom';
import '../App.css';
import FullStory from '../Components/FullStory.js';
import Navbar from '../Components/Navbar.js';
function App() {
    const storyIdParams = useParams();
    return (
        <div>
            <Navbar user={false} />
            <FullStory storyId={storyIdParams.id} />
        </div>
    );
}

export default App;
