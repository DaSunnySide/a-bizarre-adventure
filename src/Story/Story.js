import React, { Component } from 'react';
import Story from './Story.json';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: {},
      path: [],
      loaded: false
    };
  }

  componentDidMount() {
    fetchStory((storyData) => {
      this.setState({
        story: storyData,
        loaded: true
      });
    });
  }

  handleChangeChapter(chapterId) {
    const { path = [] } = this.state;

    this.setState({
      path: path.concat(chapterId)
    });
  }

  render() {
    const {
      story = {},
      path = [],
      loaded = false
    } = this.state;

    let currentChapter = {};

    if (path.length) {
      const { chapters } = story;

      const currentChapterId = path[path.length-1];
      currentChapter = chapters[currentChapterId];
    }

    return (
      <Chapter
        loaded={loaded}
        chapter={currentChapter}
        onChangeChapter={this.handleChangeChapter}
        />
    );
  }
}

export default Chapter;
