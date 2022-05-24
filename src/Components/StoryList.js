import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Story from './Story';

function PrintStories(props) {
    const List = props.data;
    const ViewList = List.map((eStory) => (
        <Story key={eStory.storyId} story={eStory} />
    ));
    return <div class="FlexStoryList">{ViewList}</div>;
}

class Stories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ViewList: [],
        };
    }
    componentDidMount() {
        axios
            .get('api/v1/stories/')
            .then((response) => {
                //console.log(response);
                this.setState({
                    ViewList: response.data.storyData,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const { ViewList } = this.state;
        console.log(ViewList);
        return <PrintStories data={ViewList} />;
    }
}
export default Stories;
