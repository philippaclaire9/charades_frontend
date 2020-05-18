import React, { Component } from 'react';

class WordPicker extends Component {
  state = { chosenWord: '' };

  componentDidMount() {
    const item = this.props.words[
      Math.floor(Math.random() * this.props.words.length)
    ];
    this.setState({ chosenWord: item });
  }
  handleSubmit = (event) => {
    const item = this.props.words[
      Math.floor(Math.random() * this.props.words.length)
    ];
    this.setState({ chosenWord: item });
  };
  // componentDidUpdate(prevState){
  //   if(this.state.chosenWord!==prevState.chosenWord){

  //   }
  // }

  render() {
    return (
      <main>
        <p>{this.state.chosenWord}</p>
        <button onSubmit={this.handleSubmit}>Next word</button>
      </main>
    );
  }
}

export default WordPicker;
