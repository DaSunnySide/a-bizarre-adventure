import React, { Component } from 'react';
import Story from '../../Story/Story.json';
import Chapter from '../../Story/Chapter.js';
import ChoiceButton from '../ChoiceButtons';
import LikeButton from '../LikeButton';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: Story.Chapters[1000000],
      chapter: Story.Chapters[1000000],
      isLiked: false,
      userLikedImages: [],
    }

  }
  likeIt = (chapter) => {
    this.setState({
      isLiked: !this.state.isLiked,
      userLikedImages: this.state.userLikedImages.concat(chapter)
    });
    console.log(this.state.userLikedImages);
  }

  handleClick = (choiceId) => {
    this.setState({
      chapter : Story.Chapters[choiceId]
    });
    this.refs.image.scrollIntoView();
  }

  render() {
    const { chapter = {} } = this.state;
    const { content, image, choices = [] } = chapter;
    return (
      <div>
        <div className="imageAndButton">
          <div ref="image" className="image">
            <img src={`/Photos/${image}`} />
          </div>
          <div className="likeButton">
            <LikeButton
              likeIt={() => this.likeIt({image})}
              status={this.state.isLiked}
              chapterId = {chapter} />
          </div>
        </div>
        <div className="story">
          <p>{content}</p>
        </div>
        <div className="choices">
          {choices.map((choice) => {
            const { text, nextId } = choice;

            return (
              <ChoiceButton
                key={nextId}
                onClick={() => this.handleClick(nextId) }
                buttonText={text}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default Landing;
