'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gemCollector = require('./games/gemCollector/');

var _gemCollector2 = _interopRequireDefault(_gemCollector);

var _squad = require('./games/squad/');

var _squad2 = _interopRequireDefault(_squad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// All games inside games directory
var AlsetReactGame = function AlsetReactGame(props) {
    switch (props.gameId) {
        case 0:
            {
                //'gemCollector'
                return _react2.default.createElement(_gemCollector2.default, props);
            }
        case 1:
            {
                //'Squad'
                return _react2.default.createElement(_squad2.default, props);
            }
        // create a case here for new game
        default:
            {
                return _react2.default.createElement(_gemCollector2.default, props);
            }
    }
};

exports.default = AlsetReactGame;