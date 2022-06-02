import { useParams } from 'react-router-dom';
import '../App.css';
import UpdateFullStory from '../Components/UpdateFullStory.js';
function StoryDetails() {
    const storyIdParams = useParams();
    return (
        <div>
            <UpdateFullStory storyId={storyIdParams.id} />
        </div>
    );
}

export default StoryDetails;
