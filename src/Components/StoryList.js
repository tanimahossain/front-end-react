import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Loading from './Loading';
import PrintStories from './PrintStories.js';

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stories: [],
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
            this.setState({
                loading: true,
            });
            const response = await axios.get(
                '/api/v1/stories/'
            );

            this.setState({
                stories: response.data.storyData,
            });
            this.setState({
                loading: false,
            });
        } catch (err) {
            //
        }
        this.setState({
            loading: false,
        });
    }
    Paginate = (page) => {
        this.setState({
            currentPage: page,
        });
    };
    render() {
        const { stories } = this.state;
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

export default Stories;
