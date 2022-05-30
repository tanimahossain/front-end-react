import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Story from './Story';

function PrintStories(props) {
    const List = props.data;
    const ViewList = List.map((eStory) => (
        <Story key={eStory.storyId} story={eStory} />
    ));
    return <div className="FlexStoryList">{ViewList}</div>;
}

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ViewList: [],
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
    render() {
        const { ViewList } = this.state;
        return <PrintStories data={ViewList} />;
    }
}
export default Stories;
