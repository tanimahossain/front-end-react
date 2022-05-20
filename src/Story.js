import './App.css';
import Preview from './StoryListPreview.js';
function Story(props) {
    return (
        <div className="wrap">
            <div className="stories-container">
                <div className="story">
                    <Preview
                        storyTitle={props.story.storyTitle}
                        createdAt={props.story.createdAt}
                        updatedAt={props.story.updatedAt}
                    />
                    <div className="story-info">
                        <div className="storyTitle">
                            <h3>
                                {props.story.storyTitle}
                            </h3>
                            <a href="#">
                                <span className="authorName">
                                    Author:{' '}
                                    {props.story.authorName}
                                </span>
                            </a>
                        </div>
                        <div className="storyBody">
                            {props.story.openingLines}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;
