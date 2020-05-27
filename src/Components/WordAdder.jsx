import React, { Component } from 'react';
import { Link } from '@reach/router';
import WordTracker from './WordTracker';

class WordAdder extends Component {
  state = { count: 0, typedWord: '', words: [], error: false };

  handleChange = (event) => {
    this.setState({ typedWord: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.count >= 10) {
      this.setState({ error: true });
    } else {
      this.setState((prevState) => ({
        words: [this.state.typedWord, ...prevState.words],
        count: prevState.count++,
        typedWord: '',
      }));
    }
    this.props.setWord(this.state.words);
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="adder"
            id="adder"
            onChange={this.handleChange}
            value={this.state.typedWord}
          />
          <button type="submit">Add word</button>

          {this.state.error && <p>Sorry, maximum word limit reached</p>}
        </form>
        {this.state.count >= 5 && (
          <Link to="play">
            <button> Play</button>
          </Link>
        )}
        <WordTracker words={this.state.words} count={this.state.count} />
        {/* <WordPicker words={this.state.words} /> */}
      </main>
    );
  }
}

export default WordAdder;
