import React from 'react';
import './App.css';
import Story from './Story';
const List = require('./StoryDB.js');
function Stories() {
    const ViewList = List.map((eStory) => (
        <Story key={eStory.storyId} story={eStory} />
    ));
    return <div class="FlexStoryList">{ViewList}</div>;
}

export default Stories;
