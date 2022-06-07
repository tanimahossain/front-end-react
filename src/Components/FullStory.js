import axios from 'axios';
import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import '../App.css';
import StoryButtons from '../Components/StoryButtons.js';
import GetDate from '../utils/DateFormat';
import Loading from './Loading';
import StoryTitle from './StoryTitle.js';

function GetButtons(props) {
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
                    {GetButtons(props)}
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
            storyId: props.storyId,
            doRedirect: false,
            error: '',
            loading: false,
        };
    }
    async componentDidMount() {
        this.setState({
            loading: true,
        });
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;

        try {
            const response = await axios.get(baseUrl);
            this.setState({
                ViewList: response.data.storyData,
            });
            this.setState({
                loading: false,
            });
        } catch (err) {
            this.setState({
                doRedirect: true,
            });
        }
    }
    render() {
        const { ViewList } = this.state;
        //console.log(ViewList);
        if (this.state.doRedirect) {
            return <Navigate to="/" />;
        } else
            return (
                <>
                    <Loading loading={this.state.loading} />
                    <PrintAStory story={ViewList} />
                </>
            );
    }
}
export default FullStory;
