import { FaChevronRight } from 'react-icons/fa';
import './App.css';
function Preview(props) {
    return (
        <div className="story-preview">
            <h2>{props.storyTitle}</h2>
            <a href="#">
                <span>See Full Story </span>
                <span className="icon">
                    <FaChevronRight />
                </span>
            </a>
        </div>
    );
}

export default Preview;
