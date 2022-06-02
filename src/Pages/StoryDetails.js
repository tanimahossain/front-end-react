import { useParams } from 'react-router-dom';
import '../App.css';
import FullStory from '../Components/FullStory.js';
function StoryDetails() {
    const storyIdParams = useParams();
    return (
        <div>
            <FullStory storyId={storyIdParams.id} />
        </div>
    );
}

export default StoryDetails;
