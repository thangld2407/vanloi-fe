import React from 'react';
import LevelContent from './LevelContent';
import LevelHeader from './LevelHeader';
import SearchLevel from './SearchLevel';

function Level(props) {
  return (
    <div className="level">
      <LevelHeader />
      <SearchLevel />
      <LevelContent />
    </div>
  );
}

export default Level;
