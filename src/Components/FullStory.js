import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import StoryButtons from '../Components/StoryButtons.js';
import GetDate from '../utils/DateFormat';
import AllContext from './AllContext';
import StoryTitle from './StoryTitle.js';

function PrintAStory(props) {
    return (
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
                    <StoryButtons
                        story={props.story}
                        storyId={props.story.storyId}
                        userName={
                            props.story.authorUsername
                        }
                    />
                </div>
            </div>
        </div>
    );
}
class FullStory extends Component {
    static contextType = AllContext;
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            ViewList: {},
            storyId: props.storyId,
            error: '',
        };
    }
    async componentDidMount() {
        const { setRedirect, setAlert } = this.context;
        this.setState({
            loading: true,
        });
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;
        setAlert('loading', true);
        try {
            const response = await axios.get(baseUrl);
            this.setState({
                ViewList: response.data.storyData,
            });
        } catch (err) {
            alert(err);
            setRedirect(true);
        }
        setAlert('loading', false);
    }
    render() {
        const { doRedirect, setRedirect } = this.context;
        const { ViewList } = this.state;
        if (doRedirect) {
            setRedirect(false);
            return <Navigate to="/" />;
        } else
            return (
                <>
                    <PrintAStory story={ViewList} />
                </>
            );
    }
}
export default FullStory;
