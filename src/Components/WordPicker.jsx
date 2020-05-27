import React, { Component } from 'react';

class WordPicker extends Component {
  state = { chosenWord: '', isFinished: false };

  findItem = (element) => {
    return element === this.state.chosenWord;
  };
  componentDidMount() {
    console.log(this.props.words);
    const item = this.props.words[
      Math.floor(Math.random() * this.props.words.length)
    ];
    this.setState({ chosenWord: item });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const item = this.props.words[
      Math.floor(Math.random() * this.props.words.length)
    ];
    const index = this.props.words.findIndex(this.findItem);
    this.props.words.splice(index, 1);
    console.log(this.props.words);
    console.log(item, this.state.chosenWord);
    if (item !== this.state.chosenWord) {
      this.setState({ chosenWord: item });
    }
    if (!this.props.words.length) {
      this.setState({ isFinished: true });
    }
  };

  handleClick = (event) => {
    event.preventDefault();
    const item = this.props.words[
      Math.floor(Math.random() * this.props.words.length)
    ];
    console.log(this.props.words);
    console.log(item, this.state.chosenWord);

    if (item !== this.state.chosenWord) {
      this.setState({ chosenWord: item });
    }
  };

  render() {
    return (
      <main>
        {' '}
        {this.state.isFinished && <p>You've finished all the words!</p>}
        {!this.state.isFinished && (
          <form onSubmit={this.handleSubmit}>
            <p>{this.state.chosenWord}</p>
            <button type="submit">Next word</button>
            <button onClick={this.handleClick}>Skip</button>
          </form>
        )}
      </main>
    );
  }
}

export default WordPicker;
