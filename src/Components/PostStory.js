import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import '../styles/Story.css';
import StoryPostButtons from './PostStoryButtons.js';
function MakeAStory(props) {
    return (
        <div className="container">
            <div className="storyDetails">
                <div className="story-info">
                    <StoryPostButtons story={props.story} />
                </div>
            </div>
        </div>
    );
}

class PostAStory extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            ViewList: {},
            storyId: props.storyId,
            doRedirect: false,
        };
    }
    //shouldComponentUpdate = () => false;
    componentDidMount() {
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            const response = async () =>
                await axios.get(baseUrl);
            this.setState({
                ViewList: response.data.storyData,
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
            return <Navigate to="/stories/" />;
        }
        return <MakeAStory story={ViewList} />;
    }
}
export default PostAStory;
