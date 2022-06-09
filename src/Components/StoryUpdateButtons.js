import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/Story.css';
import AllContext from './AllContext';
import ErrorAlert from './ErrorAlert';
export default class StoryUpdateButtons extends Component {
    static contextType = AllContext;
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            storyId: this.props.story.storyId,
            storyTitle: this.props.story.storyTitle,
            storyDescription:
                this.props.story.storyDescription,
            redirectUrl: '/stories/' + this.props.storyId,
        };
        console.log(this.state.redirectUrl);
    }
    ResetError = () => {
        this.setState({
            error: '',
        });
    };
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleUpdateChange = async (event) => {
        event.preventDefault();
        const story = {
            storyTitle: this.state.storyTitle,
            storyDescription: this.state.storyDescription,
        };
        const { setAlert, setRedirect, token, LogOut } =
            this.context;
        setAlert('loading', true);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const baseUrl =
            '/api/v1/stories/' + this.props.story.storyId;
        try {
            await axios.put(baseUrl, story, config);
            setRedirect(true);
            this.setState({
                hereRedirect: true,
            });
        } catch (err) {
            if (err.response.status === 401) {
                LogOut();
            }
            if (err.response.status !== 404) {
                this.setState({
                    error: err.response.data.message,
                });
            }
        }
        setAlert('loading', false);
    };
    render() {
        const baseUrl = '/stories/' + this.props.storyId;
        const { doRedirect, setRedirect, isLoggedIn } =
            this.context;
        console.log(
            'baseUrl: ',
            baseUrl,
            this.state.redirectUrl,
            this.state.hereRedirect,
            this.props.storyId
        );
        if (doRedirect) {
            setRedirect(false);
            return <Navigate to={baseUrl} />;
        }
        if (!isLoggedIn) {
            return <Navigate to="/" />;
        }
        return (
            <>
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
                            this.props.story
                                .storyDescription
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
                    <ErrorAlert
                        error={this.state.error}
                        ResetError={this.ResetError}
                    />
                </form>
            </>
        );
    }
}
