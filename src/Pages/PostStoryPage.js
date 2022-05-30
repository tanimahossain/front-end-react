import '../App.css';
import Navbar from '../Components/Navbar.js';
import PostStoryButton from '../Components/PostStoryButtons.js';
function StoryDetails() {
    return (
        <div>
            <Navbar user={false} />
            <PostStoryButton />
        </div>
    );
}

export default StoryDetails;
