import React, { Component } from 'react';
import { Router } from '@reach/router';
import WordAdder from './Components/WordAdder';
import WordPicker from './Components/WordPicker';

class App extends Component {
  state = { words: [] };

  setWords = (words) => {
    this.setState({ words });
  };

  render() {
    return (
      <section className="App">
        <h1>Charades words</h1>
        <Router>
          <WordAdder path="/" setWord={this.setWords} />
          <WordPicker path="play" words={this.state.words} />
        </Router>
      </section>
    );
  }
}

export default App;
