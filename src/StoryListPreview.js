import { FaChevronRight } from 'react-icons/fa';
import './App.css';
import GetDate from './DateFormat.js';
function Preview(props) {
    return (
        <div className="story-preview">
            <div className="storyDate-container">
                <span className="storyDate-text">
                    Upload date:{' '}
                    <GetDate date={props.createdAt} />
                    Last Update date:
                    <GetDate date={props.updatedAt} />
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
