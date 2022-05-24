import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import GetDate from '../utils/DateFormat';
import StoryTitle from './StoryTitle.js';
function PrintStory(props) {
    return (
        <div className="wrap">
            <div className="stories-container">
                <div className="story">
                    <div className="story-info">
                        <StoryTitle story={props.story} />
                        <GetDate
                            date={props.story.createdAt}
                        />
                        <GetDate
                            date={props.story.updatedAt}
                        />
                        <div className="storyBody">
                            {props.story.openingLines}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class FullStory extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ViewList: {},
        };
    }
    componentDidMount() {
        axios
            .get('api/v1/stories/tanimahossain_2')
            .then((response) => {
                //console.log(response);
                this.setState({
                    ViewList: response.data.storyData,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const { ViewList } = this.state;
        console.log(ViewList);
        return <PrintStory story={ViewList} />;
    }
}
export default FullStory;
