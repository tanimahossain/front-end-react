import { useParams } from 'react-router-dom';
import '../App.css';
import Navbar from '../Components/Navbar.js';
import UpdateFullStory from '../Components/UpdateFullStory.js';
function StoryDetails() {
    const storyIdParams = useParams();
    return (
        <div>
            <Navbar user={false} />
            <UpdateFullStory storyId={storyIdParams.id} />
        </div>
    );
}

export default StoryDetails;
