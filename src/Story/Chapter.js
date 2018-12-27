import React from 'react';
import Story from './Story.json';

class Chapter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: { },
      path: [],
      loaded: false
    };
  }

  fetchStory = () => {
    this.setState({
      story: '',
      loaded: true,
    })
  }
  componentDidMount() {
    this.fetchStory();
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
    console.log({currentChapter});
    return (
      <div>
      {currentChapter.content}
      </div>
    );
  }
}

export default Chapter;
