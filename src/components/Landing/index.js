import React, { Component } from 'react';
import Story from '../../Story/Story.json';
import Chapter from '../../Story/Chapter.js';
import ChoiceButton from '../ChoiceButtons';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: Story.Chapters[1000000],
      chapter: Story.Chapters[1000000],
    }

  }

  handleClick = (choiceId) => {
    this.setState({
      chapter : Story.Chapters[choiceId]
    });
  }

  // generateClickHandler(choiceId) {
  //   return function() {
  //     this.handleClick(choiceId);
  //   }
  // }

  render() {
    const { chapter = {} } = this.state;
    const { content, choices = [] } = chapter;
    return (
      <div>
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
