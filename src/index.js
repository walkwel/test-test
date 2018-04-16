import React from 'react';
// All games inside games directory
import GemCollector from './games/gemCollector/';
import Squad from './games/squad/games';

const AlsetReactGame = props => {
  switch (props.game) {
    case 'gemCollectorOrg': {
      //'gemCollector'
      return <GemCollector {...props} />;
    }
    // create a case here for new game
    default: {
      return <Squad {...props} />;
    }
  }
};

AlsetReactGame.defaultProps = {
  onPlay: () => {},
  onPause: () => {},
  onEnd: () => {},
  onError: () => {},
};

export default AlsetReactGame;
