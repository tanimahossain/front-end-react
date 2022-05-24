import '../App.css';
import StoryTitle from './StoryTitle.js';

function Story(props) {
    return (
        <div className="story-info">
            <StoryTitle story={props.story} />
            <div className="storyBody">
                {props.story.openingLines}
            </div>
        </div>
    );
}

export default Story;
