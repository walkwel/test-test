'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _games = require('./code/games/');

var _games2 = _interopRequireDefault(_games);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {};
};

var PlayEditableSquadGame = function (_Component) {
  _inherits(PlayEditableSquadGame, _Component);

  function PlayEditableSquadGame() {
    _classCallCheck(this, PlayEditableSquadGame);

    var _this = _possibleConstructorReturn(this, (PlayEditableSquadGame.__proto__ || Object.getPrototypeOf(PlayEditableSquadGame)).call(this));

    _this.initSquad = function (gameMode) {
      return _react2.default.createElement(_games2.default, {
        gameConfig: _this.props.selectedGameConfig,
        onGameEvent: _this.handleGameEvents,
        selectedGameMode: _this.props.selectedGameMode
      });
    };

    _this.state = {
      scores: [0, 0]
    };
    _this.handleGameEvents = _this.handleGameEvents.bind(_this);
    return _this;
  }

  _createClass(PlayEditableSquadGame, [{
    key: 'handleGameEvents',
    value: function handleGameEvents(event) {
      if (event.type === 'score_update') {
        if (event.scores[0] != this.state.scores[0] || event.scores[1] != this.state.scores[1]) {
          this.setState({ scores: event.scores });
        }
      }

      this.props.onGameEvent(event);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          selectedGameMode = _props.selectedGameMode;

      return _react2.default.createElement(
        'div',
        null,
        this.initSquad(selectedGameMode.id)
      );
    }
  }]);

  return PlayEditableSquadGame;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(PlayEditableSquadGame);