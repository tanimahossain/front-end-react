import { FaChevronRight } from 'react-icons/fa';
import '../App.css';
import GetDate from '../utils/DateFormat.js';
function Preview(props) {
    return (
        <div className="story-preview">
            <div className="storyDate-container">
                <span className="storyDate-text">
                    Upload date:{' '}
                    <GetDate
                        date={props.createdAt}
                        newline={true}
                    />
                    Last Update date:
                    <GetDate
                        date={props.updatedAt}
                        newline={true}
                    />
                </span>
            </div>
            <a href="#">
                <div className="seeFullStory">
                    See Full Story
                    <span className="icon">
                        <FaChevronRight />
                    </span>
                </div>
            </a>
        </div>
    );
}

export default Preview;
