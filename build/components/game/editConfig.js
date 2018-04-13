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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _brace = require('brace');

var _brace2 = _interopRequireDefault(_brace);

var _reactAce = require('react-ace');

var _reactAce2 = _interopRequireDefault(_reactAce);

require('brace/mode/json');

require('brace/theme/github');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      padding: '0px 10px'
    },
    button: {
      margin: theme.spacing.unit
    }
  };
};

var EditConfig = function (_Component) {
  _inherits(EditConfig, _Component);

  function EditConfig(props) {
    _classCallCheck(this, EditConfig);

    var _this = _possibleConstructorReturn(this, (EditConfig.__proto__ || Object.getPrototypeOf(EditConfig)).call(this));

    _this.state = {
      errors: [],
      config: JSON.stringify(props.selectedGame['editableConfig'], null, '\t')
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleValidation = _this.handleValidation.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    return _this;
  }

  _createClass(EditConfig, [{
    key: 'handleChange',
    value: function handleChange(newConfig) {
      this.setState({ config: newConfig });
    }
  }, {
    key: 'handleValidation',
    value: function handleValidation(messages) {
      var errors = messages.filter(function (msg) {
        return msg.type === 'error' ? true : false;
      });
      this.setState({ errors: errors });
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      if (this.state.errors.length > 0) {
        alert('Invalid Json');
        return;
      }
      this.props.nextPage('selectedGameConfig', JSON.parse(this.state.config));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          selectedGame = _props.selectedGame;
      var config = this.state.config;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'display1' },
          _react2.default.createElement(
            'b',
            null,
            selectedGame.name,
            ' :'
          ),
          ' Edit Configuration'
        ),
        _react2.default.createElement(_reactAce2.default, {
          mode: 'json',
          theme: 'github',
          name: 'configEditor',
          width: '100%',
          onChange: this.handleChange,
          onValidate: this.handleValidation,
          fontSize: 14,
          showPrintMargin: true,
          showGutter: true,
          highlightActiveLine: true,
          value: config,
          setOptions: {
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }
        }),
        _react2.default.createElement(
          _Button2.default,
          { variant: 'raised', color: 'primary', className: classes.button, onClick: this.handleSave },
          'Next'
        )
      );
    }
  }]);

  return EditConfig;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(EditConfig);