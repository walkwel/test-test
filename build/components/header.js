'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0px 30px'
    },
    button: {
      margin: theme.spacing.unit,
      float: 'left'
    },
    paper: theme.mixins.gutters({
      padding: '8px 0',
      margin: '0px 10px',
      borderRadius: '40px',
      float: 'left'
    })
  };
};

function Header(props) {
  var classes = props.classes,
      scores = props.scores,
      toggleScore = props.toggleScore,
      toggleMode = props.toggleMode,
      gameMode = props.gameMode;

  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'static', color: 'default' },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          'div',
          { style: { margin: '0px auto', clear: 'both' } },
          toggleScore ? _react2.default.createElement(
            _Button2.default,
            { variant: 'raised', color: 'primary', className: classes.button, onClick: function onClick() {
                return toggleScore();
              } },
            'Toggle Score'
          ) : '',
          _react2.default.createElement(
            _Paper2.default,
            { className: classes.paper, elevation: 4 },
            scores ? _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline', component: 'h3' },
              'Player 1 : ',
              _react2.default.createElement(
                'span',
                { style: { color: 'blue' } },
                scores[0]
              ),
              _react2.default.createElement(
                'span',
                { style: { color: 'gray', margin: '0px 10px' } },
                gameMode.name
              ),
              'Player 2 : ',
              _react2.default.createElement(
                'span',
                { style: { color: 'blue' } },
                scores[1]
              )
            ) : _react2.default.createElement(
              _Typography2.default,
              { variant: 'headline', component: 'h3' },
              _react2.default.createElement(
                'span',
                { style: { color: 'gray', margin: '0px 10px' } },
                gameMode.name
              )
            )
          ),
          toggleMode ? _react2.default.createElement(
            _Button2.default,
            { variant: 'raised', color: 'primary', className: classes.button, onClick: function onClick() {
                return toggleMode();
              } },
            'Toggle Mode'
          ) : ''
        )
      )
    )
  );
}

Header.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Header);