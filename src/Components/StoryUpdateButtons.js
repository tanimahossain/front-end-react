import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/Story.css';
export default class StoryUpdateButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            storyId: this.props.story.storyId,
            storyTitle: this.props.story.storyTitle,
            storyDescription:
                this.props.story.storyDescription,
        };
    }
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleUpdateChange = async () => {
        const story = {
            storyTitle: this.state.storyTitle,
            storyDescription: this.state.storyDescription,
        };
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token'
                )}`,
            },
        };
        const baseUrl =
            '/api/v1/stories/' + this.props.story.storyId;
        //const navigate = useNavigate();
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            await axios.put(baseUrl, story, config);
            window.open(
                '/stories/' + this.props.story.storyId,
                '_self'
            );
        } catch (err) {
            //console.log(err);
        }
        return <Navigate to="/" />;
    };
    render() {
        const baseUrl =
            '/stories/' + this.props.story.storyId;
        console.log('baseUrl: ', baseUrl);
        return (
            <form onSubmit={this.handleUpdateChange}>
                Story Title
                <textarea
                    type="text"
                    defaultValue={
                        this.props.story.storyTitle
                    }
                    name="storyTitle"
                    className="editStoryTitle"
                    onChange={this.handleFieldChange}
                    wrap="hard"
                    required
                />
                Story
                <textarea
                    type="text"
                    defaultValue={
                        this.props.story.storyDescription
                    }
                    name="storyDescription"
                    className="editStoryBody"
                    onChange={this.handleFieldChange}
                    wrap="hard"
                    required
                />
                <Link to={baseUrl}>
                    <button className="Cancelbtn">
                        Cancel
                    </button>
                </Link>
                <button className="UpdateStorybtn">
                    Update
                </button>
            </form>
        );
    }
}
