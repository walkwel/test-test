'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGameKit = require('react-game-kit');

var _matterJs = require('matter-js');

var _matterJs2 = _interopRequireDefault(_matterJs);

var _mobxReact = require('mobx-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _background = require('./background.jsx');

var _background2 = _interopRequireDefault(_background);

var _character = require('./character.jsx');

var _character2 = _interopRequireDefault(_character);

var _stone = require('./stone.jsx');

var _stone2 = _interopRequireDefault(_stone);

var _grass = require('./grass.jsx');

var _grass2 = _interopRequireDefault(_grass);

var _score = require('./score.jsx');

var _score2 = _interopRequireDefault(_score);

var _info = require('./info.jsx');

var _info2 = _interopRequireDefault(_info);

var _controls = require('./controls.jsx');

var _controls2 = _interopRequireDefault(_controls);

var _winLoseScreen = require('./winLoseScreen.jsx');

var _winLoseScreen2 = _interopRequireDefault(_winLoseScreen);

var _gameStore = require('../store/game-store1.jsx');

var _gameStore2 = _interopRequireDefault(_gameStore);

var _gameStore3 = require('../store/game-store2.jsx');

var _gameStore4 = _interopRequireDefault(_gameStore3);

var _gameStore5 = require('../store/game-store3.jsx');

var _gameStore6 = _interopRequireDefault(_gameStore5);

var _gameStore7 = require('../store/game-store4.jsx');

var _gameStore8 = _interopRequireDefault(_gameStore7);

var _characterBlonde = require('../assets/character-blonde.png');

var _characterBlonde2 = _interopRequireDefault(_characterBlonde);

var _characterBrunette = require('../assets/character-brunette.png');

var _characterBrunette2 = _interopRequireDefault(_characterBrunette);

require('../style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// components

// stores


//import images


var Game = function (_Component) {
  _inherits(Game, _Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    var GameStore = void 0;
    if (_this.props.gameId === 0) GameStore = _gameStore2.default;else if (_this.props.gameId === 1) GameStore = _gameStore4.default;else if (_this.props.gameId === 2) GameStore = _gameStore6.default;else if (_this.props.gameId === 3) GameStore = _gameStore8.default;
    if (props.player1) _this.keyListener1 = { status: false };else _this.keyListener1 = new _reactGameKit.KeyListener();
    if (props.player2) _this.keyListener2 = { status: false };else _this.keyListener2 = new _reactGameKit.KeyListener();
    _this.updateHandler = _this.updateHandler.bind(_this);
    return _this;
  }

  _createClass(Game, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.keyListener1 && this.keyListener1.status !== false) this.keyListener1.subscribe([this.keyListener1.LEFT, this.keyListener1.RIGHT, this.keyListener1.UP, this.keyListener1.DOWN]);
      if (this.keyListener2 && this.keyListener2.status !== false) this.keyListener2.subscribe([73, 74, 75, 76]);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.keyListener1 && this.keyListener1.LEFT) this.keyListener1.unsubscribe();
      if (this.keyListener2 && this.keyListener2.LEFT) this.keyListener2.unsubscribe();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var GameStore = void 0;
      if (this.props.gameId === 0) GameStore = _gameStore2.default;else if (this.props.gameId === 1) GameStore = _gameStore4.default;else if (this.props.gameId === 2) GameStore = _gameStore6.default;else if (this.props.gameId === 3) GameStore = _gameStore8.default;
      if (this.props.config) GameStore.config = this.props.config;
      var _props = this.props,
          _props$showScore = _props.showScore,
          showScore = _props$showScore === undefined ? true : _props$showScore,
          _props$showMode = _props.showMode,
          showMode = _props$showMode === undefined ? true : _props$showMode,
          _onScoreUpdate = _props.onScoreUpdate,
          _onWin = _props.onWin,
          play = _props.play,
          _onPause = _props.onPause,
          control = _props.control;

      return _react2.default.createElement(
        'div',
        { style: { height: '60vh', width: '100%' } },
        _react2.default.createElement(
          _reactGameKit.Loop,
          null,
          _react2.default.createElement(
            _reactGameKit.Stage,
            { className: 'index-bg-color' },
            _react2.default.createElement(
              _reactGameKit.World,
              {
                onUpdate: this.updateHandler,
                onInit: this.physicsInit,
                onCollision: this.colissionHandler,
                gravity: {
                  x: 0,
                  y: 0,
                  scale: 0.001
                }
              },
              _react2.default.createElement(_grass2.default, null),
              _react2.default.createElement(_character2.default, {
                keys: this.keyListener1,
                store: GameStore,
                imgSrc: _characterBlonde2.default,
                key: 0,
                index: 0,
                gameId: this.props.gameId
              }),
              _react2.default.createElement(_character2.default, {
                keys: this.keyListener2,
                store: GameStore,
                imgSrc: _characterBrunette2.default,
                key: 1,
                index: 1,
                gameId: this.props.gameId
              }),
              GameStore.stonesData.map(function (stone, index) {
                return _react2.default.createElement(_stone2.default, { store: GameStore, gameId: _this2.props.gameId, key: index, index: index });
              }),
              showScore && _react2.default.createElement(_score2.default, { store: GameStore, left: '0', right: 'none', playerId: 0 }),
              showScore && _react2.default.createElement(_score2.default, { store: GameStore, left: 'none', right: '0', playerId: 1 }),
              showMode && _react2.default.createElement(_info2.default, { gameId: this.props.gameId }),
              _react2.default.createElement(_controls2.default, { store: GameStore, play: play, onPause: function onPause(playEvent) {
                  return _onPause(playEvent);
                } }),
              _react2.default.createElement(_winLoseScreen2.default, {
                store: GameStore,
                onScoreUpdate: function onScoreUpdate(playerScores) {
                  return _onScoreUpdate(playerScores);
                },
                onWin: function onWin(winner) {
                  return _onWin(winner);
                }
              })
            )
          )
        )
      );
    }
  }, {
    key: 'physicsInit',
    value: function physicsInit(engine) {}
  }, {
    key: 'colissionHandler',
    value: function colissionHandler(engine) {}
  }, {
    key: 'updateHandler',
    value: function updateHandler(engine) {
      var player1Direction = void 0;
      var player2Direction = void 0;
      var GameStore = void 0;
      if (this.props.gameId === 0) GameStore = _gameStore2.default;else if (this.props.gameId === 1) GameStore = _gameStore4.default;else if (this.props.gameId === 2) GameStore = _gameStore6.default;else if (this.props.gameId === 3) GameStore = _gameStore8.default;
      if (GameStore.mode === 'pause') return;
      var WorldData = {
        players: GameStore.characterPosition,
        stones: GameStore.stonesData
      };
      if (this.props.player1) player1Direction = this.props.player1(WorldData);
      if (this.props.player2) player2Direction = this.props.player2(WorldData);
      if (player1Direction) {
        if (player1Direction.left) GameStore.characterState[0] = 9;else if (player1Direction.right) GameStore.characterState[0] = 11;else if (player1Direction.up) GameStore.characterState[0] = 8;else if (player1Direction.down) GameStore.characterState[0] = 10;
      }
      if (player2Direction) {
        if (player2Direction.left) GameStore.characterState[1] = 9;else if (player2Direction.right) GameStore.characterState[1] = 11;else if (player2Direction.up) GameStore.characterState[1] = 8;else if (player2Direction.down) GameStore.characterState[1] = 10;
      }
      GameStore.createNewStones();
    }
  }]);

  return Game;
}(_react.Component);

Game.propTypes = {
  showScore: _propTypes2.default.bool.isRequired,
  showMode: _propTypes2.default.bool.isRequired,
  onScoreUpdate: _propTypes2.default.func.isRequired
};

exports.default = (0, _mobxReact.observer)(Game);