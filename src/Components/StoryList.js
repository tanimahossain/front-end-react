import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import AllContext from './AllContext';
import PrintStories from './PrintStories.js';

class Stories extends Component {
    static contextType = AllContext;
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
        const { setAlert } = this.context;
        setAlert('loading', true);
        try {
            const response = await axios.get(
                '/api/v1/stories/'
            );
            this.setState({
                stories: response.data.storyData,
            });
        } catch (err) {
            alert(err);
        }
        setAlert('loading', false);
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
