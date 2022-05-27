import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import StoryUpdateButtons from '../Components/StoryUpdateButtons.js';
import '../styles/Story.css';
import GetDate from '../utils/DateFormat';
import StoryTitle from './StoryTitle.js';
function getButtons(props) {
    return <StoryUpdateButtons story={props.story} />;
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
                        {getButtons(props)}
                    </div>
                </div>
            </div>
        </div>
    );
}

class UpdateFullStory extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            ViewList: {},
            storyId: props.storyId,
        };
    }
    //shouldComponentUpdate = () => false;
    componentDidMount() {
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;
        axios
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
        return <PrintAStory story={ViewList} />;
    }
}
export default UpdateFullStory;
