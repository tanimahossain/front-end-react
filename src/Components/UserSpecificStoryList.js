import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import PrintStories from './PrintStories.js';

class UserSpecificStoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ViewList: [],
            userName: props.userName,
            loading: false,
            currentPage: 1,
            storiesPerPage: 5,
        };
    }
    componentDidMount() {
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        axios
            .get('/api/v1/stories/')
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
    Paginate = (page) => {
        this.setState({
            currentPage: page,
        });
    };
    render() {
        const { ViewList } = this.state;
        const stories = [];
        for (let i = 0; i < ViewList.length; i++) {
            if (
                ViewList[i].authorUsername !=
                this.state.userName
            )
                continue;
            stories.push(ViewList[i]);
        }
        const indexOfLastPost =
            this.state.currentPage *
            this.state.storiesPerPage;
        const indexOfFirstPost =
            indexOfLastPost - this.state.storiesPerPage;
        const Stories = stories.slice(
            indexOfFirstPost,
            indexOfLastPost
        );
        return (
            <PrintStories
                currentPage={this.state.currentPage}
                data={Stories}
                Paginate={this.Paginate}
                mx={Math.ceil(
                    stories.length /
                        this.state.storiesPerPage
                )}
            />
        );
    }
}
export default UserSpecificStoryList;
