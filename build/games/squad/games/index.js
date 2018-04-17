'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../utils/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./squadGame/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./gemCollector/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('./singlePlayerTwoWindows/index');

var _index8 = _interopRequireDefault(_index7);

var _squadConfig = require('../defaultConfigs/squadConfig.json');

var _squadConfig2 = _interopRequireDefault(_squadConfig);

var _singlePlayerTwoWindowsConfig = require('../defaultConfigs/singlePlayerTwoWindowsConfig.json');

var _singlePlayerTwoWindowsConfig2 = _interopRequireDefault(_singlePlayerTwoWindowsConfig);

var _gemCollectorConfig = require('../defaultConfigs/gemCollectorConfig.json');

var _gemCollectorConfig2 = _interopRequireDefault(_gemCollectorConfig);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALSETReactGame = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(ALSETReactGame, _Component);

  function ALSETReactGame(props) {
    _classCallCheck(this, ALSETReactGame);

    var _this = _possibleConstructorReturn(this, (ALSETReactGame.__proto__ || Object.getPrototypeOf(ALSETReactGame)).call(this, props));

    _this.getGameData = _this.getGameData.bind(_this);
    return _this;
  }

  _createClass(ALSETReactGame, [{
    key: 'render',
    value: function render() {
      var gameData = this.getGameData(this.props.game);
      var getCommands = _index2.default.getCommands;
      switch (this.props.game) {
        case 'squad':
          return _react2.default.createElement(_index4.default, {
            onPlay: this.props.onPlay,
            onPause: this.props.onPause,
            onEnd: this.props.onEnd,
            onError: this.props.onError,
            onStateChange: this.props.onStateChange,
            player1Function: this.props.player1Function,
            player2Function: this.props.player2Function,
            gameData: gameData,
            getCommands: getCommands
          });
        case 'gemCollector':
          return _react2.default.createElement(_index6.default, {
            onPlay: this.props.onPlay,
            onPause: this.props.onPause,
            onEnd: this.props.onEnd,
            onError: this.props.onError,
            onStateChange: this.props.onStateChange,
            player1Function: this.props.player1Function,
            player2Function: this.props.player2Function,
            gameData: gameData,
            getCommands: getCommands
          });
        case 'singlePlayerTwoWindows':
          return _react2.default.createElement(_index8.default, {
            onPlay: this.props.onPlay,
            onPause: this.props.onPause,
            onEnd: this.props.onEnd,
            onError: this.props.onError,
            onStateChange: this.props.onStateChange,
            player1Function: this.props.player1Function,
            player2Function: this.props.player2Function,
            gameData: gameData,
            getCommands: getCommands
          });
        default:
          return _react2.default.createElement(_index4.default, {
            onPlay: this.props.onPlay,
            onPause: this.props.onPause,
            onEnd: this.props.onEnd,
            onError: this.props.onError,
            onStateChange: this.props.onStateChange,
            player1Function: this.props.player1Function,
            player2Function: this.props.player2Function,
            gameData: gameData,
            getCommands: getCommands
          });
      }
    }
  }, {
    key: 'getGameData',
    value: function getGameData(gameType) {
      var data = {};
      if (gameType == 'gemCollector') var defaultConfig = _gemCollectorConfig2.default;else if (gameType == 'singlePlayerTwoWindows') var defaultConfig = _singlePlayerTwoWindowsConfig2.default;else var defaultConfig = _squadConfig2.default;
      var customConfig = this.props.config ? this.props.config : {};
      data.showCodeEditor = this.props.showCodeEditor || customConfig.showCodeEditor || defaultConfig.showCodeEditor;
      data.config = this.props.config || defaultConfig;
      data.player = this.props.player || customConfig.player || defaultConfig.player;
      data.mode = this.props.mode || customConfig.mode || defaultConfig.mode;
      data.player1Keys = this.props.player1Keys || customConfig.player1Keys || defaultConfig.player1Keys;
      data.player2Keys = this.props.player2Keys || customConfig.player2Keys || defaultConfig.player2Keys;
      return data;
    }
  }]);

  return ALSETReactGame;
}(_react.Component)) || _class;

exports.default = ALSETReactGame;