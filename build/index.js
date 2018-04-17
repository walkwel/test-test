'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gemCollector = require('./games/gemCollector/');

var _gemCollector2 = _interopRequireDefault(_gemCollector);

var _games = require('./games/squad/games');

var _games2 = _interopRequireDefault(_games);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// All games inside games directory
var AlsetReactGame = function AlsetReactGame(props) {
  switch (props.game) {
    case 'gemCollectorOrg':
      {
        //'gemCollector'
        return _react2.default.createElement(_gemCollector2.default, props);
      }
    // create a case here for new game
    default:
      {
        return _react2.default.createElement(_games2.default, props);
      }
  }
};

AlsetReactGame.defaultProps = {
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onEnd: function onEnd() {},
  onError: function onError() {}
};

exports.default = AlsetReactGame;