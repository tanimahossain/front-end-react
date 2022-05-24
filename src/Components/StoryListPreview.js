import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../App.css';
import GetDate from '../utils/DateFormat.js';
function Preview(props) {
    const storyUrl = 'stories/' + props.storyId;
    console.log(storyUrl);
    return (
        <div className="story-preview">
            <div className="storyDate-container">
                <span className="storyDate-text">
                    Created at:{' '}
                    <div>
                        <GetDate
                            date={props.createdAt}
                            newline={true}
                        />
                    </div>
                    Last Updated at:{' '}
                    <div>
                        <GetDate
                            date={props.updatedAt}
                            newline={true}
                        />
                    </div>
                </span>
            </div>
            <div className="seeFullStory">
                <Link to={storyUrl} className="noUnderLine">
                    See Full Story
                    <span className="icon">
                        <FaChevronRight />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Preview;
