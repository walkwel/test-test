'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _selectGame = require('./selectGame');

var _selectGame2 = _interopRequireDefault(_selectGame);

var _editConfig = require('./editConfig');

var _editConfig2 = _interopRequireDefault(_editConfig);

var _selectMode = require('./selectMode');

var _selectMode2 = _interopRequireDefault(_selectMode);

var _ALSETReactGame = require('../../modules/ALSET-ReactGame/');

var _ALSETReactGame2 = _interopRequireDefault(_ALSETReactGame);

var _eventsTable = require('./eventsTable');

var _eventsTable2 = _interopRequireDefault(_eventsTable);

var _config = require('../../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    button: {
      margin: '5px',
      float: 'left'
    },
    controls: {
      margin: '20px 10px'
    }
  };
};

var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));

    _this.getActivePage = function () {
      var _this$state = _this.state,
          activePageNum = _this$state.activePageNum,
          selectedGameId = _this$state.selectedGameId,
          selectedGameMode = _this$state.selectedGameMode,
          selectedGameConfig = _this$state.selectedGameConfig,
          events = _this$state.events;

      var selectedGame = _config2.default.games[selectedGameId];
      switch (activePageNum) {
        case 0:
          {
            return _react2.default.createElement(_selectGame2.default, { nextPage: function nextPage(key, value) {
                return _this.nextPage(key, value);
              }, allGamesConfig: _config2.default.games });
          }
        case 1:
          {
            return _react2.default.createElement(_editConfig2.default, { nextPage: function nextPage(key, value) {
                return _this.nextPage(key, value);
              }, selectedGame: selectedGame });
          }
        case 2:
          {
            return _react2.default.createElement(_selectMode2.default, { nextPage: function nextPage(key, value) {
                return _this.nextPage(key, value);
              }, selectedGame: selectedGame });
          }
        case 3:
          {
            return _react2.default.createElement(_ALSETReactGame2.default, {
              gameId: selectedGameId,
              selectedGameMode: selectedGameMode,
              onGameEvent: _this.handleGameEvent,
              selectedGame: selectedGame,
              selectedGameConfig: selectedGameConfig
            });
          }
        default:
          return null;
      }
    };

    _this.state = {
      activePageNum: 0,
      selectedGameId: 0,
      selectedGameMode: {
        id: null,
        name: null
      },
      selectedGameConfig: null,
      events: []
    };
    _this.nextPage = _this.nextPage.bind(_this);
    _this.previousPage = _this.previousPage.bind(_this);
    _this.handleGameEvent = _this.handleGameEvent.bind(_this);
    _this.resetGame = _this.resetGame.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'nextPage',
    value: function nextPage() {
      var stateKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var stateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.state.activePageNum < 3) {
        if (stateKey) {
          this.setState(_defineProperty({}, stateKey, stateValue));
        }
        this.setState({ activePageNum: this.state.activePageNum + 1 });
      }
    }
  }, {
    key: 'previousPage',
    value: function previousPage() {
      if (this.state.activePageNum > 0) {
        if (this.state.activePageNum === 3) {
          this.handleGameEvent({
            type: 'end'
          });
        }
        this.setState({ activePageNum: this.state.activePageNum - 1 });
      }
    }
  }, {
    key: 'resetGame',
    value: function resetGame() {
      this.setState({
        activePageNum: 0,
        selectedGameId: 0,
        selectedGameMode: {
          id: null,
          name: null
        },
        selectedGameConfig: null
      });
      this.handleGameEvent({
        type: 'end'
      });
    }
  }, {
    key: 'handleGameEvent',
    value: function handleGameEvent(newEvent) {
      var events = this.state.events;
      var selectedGame = _config2.default.games[this.state.selectedGameId];
      this.setState({
        events: [].concat(_toConsumableArray(events), [_extends({}, newEvent, {
          selectedGame: selectedGame,
          gameMode: this.state.selectedGameMode,
          timeStamp: Date.now()
        })])
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _state = this.state,
          activePageNum = _state.activePageNum,
          selectedGameId = _state.selectedGameId,
          selectedGameMode = _state.selectedGameMode,
          events = _state.events;

      var controlButtons = _react2.default.createElement(
        'div',
        { className: classes.controls },
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _Button2.default,
          { variant: 'raised', className: classes.button, onClick: function onClick() {
              return _this2.previousPage();
            } },
          'Back'
        ),
        _react2.default.createElement(
          _Button2.default,
          { variant: 'raised', color: 'secondary', className: classes.button, onClick: function onClick() {
              return _this2.resetGame();
            } },
          'End'
        )
      );
      return _react2.default.createElement(
        'div',
        null,
        this.getActivePage(),
        activePageNum > 0 && controlButtons,
        _react2.default.createElement(
          'div',
          { style: { marginTop: '100px' } },
          activePageNum === 0 && _react2.default.createElement(_eventsTable2.default, { events: events })
        )
      );
    }
  }]);

  return Index;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(Index);