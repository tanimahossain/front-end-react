import { Link } from 'react-router-dom';
import '../App.css';

function StoryTitle(props) {
    return (
        <div className="storyTitle">
            <h3>
                <Link
                    to="stories/tanimahossain_2"
                    className="noUnderLine"
                >
                    {props.story.storyTitle}
                </Link>
            </h3>
            <a href="#">
                <span className="authorName">
                    Author: {props.story.authorName}
                </span>
            </a>
        </div>
    );
}

export default StoryTitle;
