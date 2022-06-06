import { useParams } from 'react-router-dom';
import '../App.css';
import FullStory from '../Components/FullStory.js';
//import Navbar from '../Components/Navbar.js';
function StoryDetails() {
    const storyIdParams = useParams();
    return (
        <>
            <FullStory storyId={storyIdParams.id} />
        </>
    );
}

export default StoryDetails;
