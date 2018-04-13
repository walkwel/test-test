import React from 'react';
// All games inside games directory
import GemCollector from './games/gemCollector/';
import Squad from './games/squad/';

const AlsetReactGame = (props) => {
    switch(props.gameId) {
        case 0: { //'gemCollector'
            return <GemCollector {...props} />;
        }
        case 1: { //'Squad'
            return <Squad {...props} />;
        }
        // create a case here for new game
        default: {
            return <GemCollector {...props} />;
        }
    }
};

export default AlsetReactGame;