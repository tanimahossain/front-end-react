import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import StoryUpdateButtons from '../Components/StoryUpdateButtons.js';
import '../styles/Story.css';
import Loading from './Loading.js';
function PrintAStory(props) {
    return (
        <div className="container">
            <div className="storyDetails">
                <div className="story-info">
                    <StoryUpdateButtons
                        story={props.story}
                    />
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
    async componentDidMount() {
        const baseUrl =
            '/api/v1/stories/' + this.state.storyId;
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            this.setState({
                loading: true,
            });
            const response = await axios.get(baseUrl);
            this.setState({
                ViewList: response.data.storyData,
            });
        } catch (err) {
            //
        }
        this.setState({ loading: false });
    }
    render() {
        const { ViewList } = this.state;
        //console.log(ViewList);
        return (
            <>
                <Loading loading={this.state.loading} />
                <PrintAStory story={ViewList} />
            </>
        );
    }
}
export default UpdateFullStory;
