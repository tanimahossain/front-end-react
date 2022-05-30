import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import '../styles/Story.css';
import StoryPostButtons from './PostStoryButtons.js';
function MakeAStory(props) {
    return (
        <div className="wrap">
            <div className="container">
                <div className="storyDetails">
                    <div className="story-info">
                        <StoryPostButtons
                            story={props.story}
                        />
                    </div>
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
        };
    }
    //shouldComponentUpdate = () => false;
    async componentDidMount() {
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        await axios
            .get(baseUrl)
            .then((response) => {
                //console.log(response);
                this.setState({
                    ViewList: response.data.storyData,
                });
            })
            .catch((err) => {
                //console.log(err);
            });
    }
    render() {
        const { ViewList } = this.state;
        //console.log(ViewList);
        return <MakeAStory story={ViewList} />;
    }
}
export default PostAStory;
