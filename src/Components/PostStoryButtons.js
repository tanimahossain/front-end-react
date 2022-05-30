import axios from 'axios';
import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../App.css';
import '../styles/Story.css';
export default class PostStoryButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            storyTitle: '',
            storyDescription: '',
        };
    }
    handleFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    handleUpdateChange = async () => {
        console.log(localStorage.getItem('token'));
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
        const baseUrl = '/api/v1/stories/';
        console.log('caseUrl: ', baseUrl);
        //const navigate = useNavigate();
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            const response = await axios.post(
                baseUrl,
                story,
                config
            );
            //alert('story updated!');
            //localStorage.setItem('loggedIn', false);
            //navigate('/');
            console.log(response);
            window.open(
                '/stories/' + response.data.storyId,
                '_self'
            );
        } catch (err) {
            console.log(err);
        }
        return <Navigate to="/" />;
    };
    render() {
        const baseUrl = localStorage.getItem('loggedIn')
            ? '/users/' + localStorage.getItem('userName')
            : '/homepage';
        console.log('baseUrl: ', baseUrl);
        return (
            <div className="wrap">
                <div className="container">
                    <div className="storyDetails">
                        <div className="story-info">
                            Story Title
                            <textarea
                                type="text"
                                placeholder="Story Title..."
                                name="storyTitle"
                                className="editStoryTitle"
                                onChange={
                                    this.handleFieldChange
                                }
                                wrap="hard"
                            />
                            Story
                            <textarea
                                type="text"
                                placeholder="Story Description...."
                                name="storyDescription"
                                className="editStoryBody"
                                onChange={
                                    this.handleFieldChange
                                }
                                wrap="hard"
                            />
                            <Link to={baseUrl}>
                                <button className="Cancelbtn">
                                    Cancel
                                </button>
                            </Link>
                            <button
                                className="UpdateStorybtn"
                                onClick={
                                    this.handleUpdateChange
                                }
                            >
                                Post Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
