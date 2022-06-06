import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Loading from './Loading';
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
    async componentDidMount() {
        this.setState({
            loading: true,
        });
        axios.defaults.headers = {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
        };
        try {
            const response = await axios.get(
                '/api/v1/stories/'
            );
            this.setState({
                ViewList: response.data.storyData,
            });
            this.setState({
                loading: false,
            });
        } catch (err) {
            //
        }
        localStorage.removeItem('loading', false);
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
            <>
                <Loading loading={this.state.loading} />
                <PrintStories
                    currentPage={this.state.currentPage}
                    data={Stories}
                    Paginate={this.Paginate}
                    mx={Math.ceil(
                        stories.length /
                            this.state.storiesPerPage
                    )}
                />
            </>
        );
    }
}
export default UserSpecificStoryList;
