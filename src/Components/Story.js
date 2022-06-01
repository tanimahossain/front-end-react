import '../App.css';
import StoryInfo from './StoryInfo.js';
import Preview from './StoryListPreview.js';
function Story(props) {
    return (
        <div className="container">
            <div className="story">
                <Preview
                    storyTitle={props.story.storyTitle}
                    storyId={props.story.storyId}
                    createdAt={props.story.createdAt}
                    updatedAt={props.story.updatedAt}
                />
                <StoryInfo story={props.story} />
            </div>
        </div>
    );
}

export default Story;
