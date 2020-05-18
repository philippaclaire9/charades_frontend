import React from 'react';
import WordCard from './WordCard';

const WordTracker = ({ count, words }) => {
  return (
    <section>
      {count === 1 && <p>You have added 1 word</p>}
      {count !== 1 && <p>You have added {count} words </p>}
      {/* {words.map((word) => {
        return <WordCard key={word} word={word} />;
      })} */}
    </section>
  );
};

export default WordTracker;
