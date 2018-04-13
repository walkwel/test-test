'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _examples = require('./components/examples');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  var component = void 0;
  switch (props.mode) {
    case 'bot-vs-bot':
      component = _react2.default.createElement(_examples.GemCollectorBotVSBot, props);
      break;
    case 'bot-vs-player':
      component = _react2.default.createElement(_examples.GemCollectorBotVSPlayer, props);
      break;
    case 'player-vs-player':
      component = _react2.default.createElement(_examples.GemCollectorPlayerVSPlayer, props);
      break;
    case 'bot-vs-custom-code':
      component = _react2.default.createElement(_examples.GemCollectorBotVSCustom, props);
      break;
    default:
      component = _react2.default.createElement(_examples.GemCollectorBotVSPlayer, props);
      break;
  }
  return component;
};

exports.default = App;