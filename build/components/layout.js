'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Hidden = require('material-ui/Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _game = require('./game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 0;

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
      backgroundColor: '#fafafa'
    },
    appBar: _defineProperty({
      position: 'absolute',
      marginLeft: drawerWidth
    }, theme.breakpoints.up('md'), {
      width: 'calc(100% - ' + drawerWidth + 'px)'
    }),
    navIconHide: _defineProperty({}, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    toolbar: _extends({}, theme.mixins.toolbar, {
      minHeight: '800px',
      marginLeft: '10%',
      marginRight: '10%'
    }),
    drawerPaper: _defineProperty({
      width: drawerWidth
    }, theme.breakpoints.up('md'), {
      position: 'relative'
    }),
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      marginTop: '100px',
      marginBottom: '100px'
    }
  };
};

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.handleDrawerToggle = function () {
      _this.setState({ mobileOpen: !_this.state.mobileOpen });
    };

    _this.state = {
      mobileOpen: false
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme;


      var drawer = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: classes.toolbar }),
        _react2.default.createElement(_Divider2.default, null)
      );

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _AppBar2.default,
          { className: classes.appBar },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(_IconButton2.default, {
              color: 'inherit',
              'aria-label': 'open drawer',
              onClick: this.handleDrawerToggle,
              className: classes.navIconHide
            }),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit', noWrap: true },
              'ALSET Game'
            )
          )
        ),
        _react2.default.createElement(
          _Hidden2.default,
          { mdUp: true },
          _react2.default.createElement(_Drawer2.default, {
            variant: 'temporary',
            anchor: theme.direction === 'rtl' ? 'right' : 'left',
            open: this.state.mobileOpen,
            onClose: this.handleDrawerToggle,
            classes: {
              paper: classes.drawerPaper
            },
            ModalProps: {
              keepMounted: true // Better open performance on mobile.
            }
          })
        ),
        _react2.default.createElement(_Hidden2.default, { smDown: true, implementation: 'css' }),
        _react2.default.createElement(
          'main',
          { className: classes.content },
          _react2.default.createElement(
            'div',
            { className: classes.toolbar },
            _react2.default.createElement(_game2.default, null)
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(Layout);