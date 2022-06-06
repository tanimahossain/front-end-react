import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Story.css';
import Loading from './Loading.js';
export default class StoryButtons extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            ViewList: {},
            storyId: props.story.storyId,
            loading: false,
        };
    }
    handleDeleteChange = async () => {
        const story = {};
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    'token',
                    false
                )}`,
            },
        };
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
            await axios.delete(baseUrl, config, story);
            alert('story deleted!');
            window.open('/', '_self');
        } catch {
            //console.log(err);
        }
        this.setState({
            loading: false,
        });
    };
    render() {
        const baseUrl =
            '/stories/' + this.state.storyId + '/edit';
        return (
            <>
                <Loading loading={this.state.loading} />
                <button
                    className="DeleteStorybtn"
                    onClick={this.handleDeleteChange}
                >
                    Delete Story
                </button>
                <Link to={baseUrl}>
                    <button className="UpdateStorybtn">
                        Update Story
                    </button>
                </Link>
            </>
        );
    }
}
