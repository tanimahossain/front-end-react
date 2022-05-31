import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import StoryButtons from '../Components/StoryButtons.js';
import GetDate from '../utils/DateFormat';
import StoryTitle from './StoryTitle.js';
function getButtons(props) {
    const loggedIn = localStorage.getItem('loggedIn');
    if (
        loggedIn &&
        localStorage.getItem('userName') ==
            props.story.authorUsername
    ) {
        return <StoryButtons story={props.story} />;
    }
    return;
}
function PrintAStory(props) {
    return (
        <div className="wrap">
            <div className="container">
                <div className="storyDetails">
                    <div className="story-info">
                        <StoryTitle story={props.story} />
                        <div className="storyDate-text">
                            Created at: &emsp;&emsp;&ensp;
                            <GetDate
                                date={props.story.createdAt}
                            />
                            Last Updated at:{' '}
                            <GetDate
                                date={props.story.updatedAt}
                            />
                        </div>
                        <div className="storyBody">
                            {props.story.storyDescription}
                        </div>
                        {getButtons(props)}
                    </div>
                </div>
            </div>
        </div>
    );
}

class FullStory extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            ViewList: {},
            doRedirect: false,
            storyId: props.storyId,
        };
    }
    //shouldComponentUpdate = () => false;
    async componentDidMount() {
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;

        try {
            const response = await axios.get(baseUrl);
            this.setState({
                ViewList: response.data.storyData,
            });
        } catch (err) {
            this.setState({
                doRedirect: true,
            });
        }
    }
    static getDerivedStateFromError(error) {
        return { doRedirect: true };
    }
    render() {
        const { ViewList } = this.state;
        //console.log(ViewList);
        if (this.state.doRedirect) {
            return <Navigate to="/" />;
        }
        return <PrintAStory story={ViewList} />;
    }
}
export default FullStory;
