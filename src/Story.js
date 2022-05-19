import './App.css';
import { GetDate } from './DateFormat.js';
import Preview from './StoryListPreview.js';
function Story(props) {
    return (
        <div className="wrap">
            <div className="stories-container">
                <div className="story">
                    <Preview
                        storyTitle={props.story.storyTitle}
                    />
                    <div className="story-info">
                        <div>
                            <a href="#">
                                <span className="authorName">
                                    Author:{' '}
                                    {props.story.authorName}
                                </span>
                            </a>
                            <div className="storyDate-container">
                                <span className="storyDate-text">
                                    Upload date:{' '}
                                    {GetDate(
                                        props.story
                                            .createdAt
                                    )}{' '}
                                    | Last Update date:
                                    {GetDate(
                                        props.story
                                            .updatedAt
                                    )}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3>
                                {props.story.openingLines}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;
