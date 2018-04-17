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

var _Table = require('material-ui/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3
      // overflowX: 'auto',
    },
    table: {
      minWidth: 700
    }
  };
};

var EventsTable = function (_Component) {
  _inherits(EventsTable, _Component);

  function EventsTable() {
    _classCallCheck(this, EventsTable);

    return _possibleConstructorReturn(this, (EventsTable.__proto__ || Object.getPrototypeOf(EventsTable)).call(this));
  }

  _createClass(EventsTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          events = _props.events;

      return _react2.default.createElement(
        'div',
        { style: { maxHeight: '400px', overflowY: 'scroll' } },
        events.length > 0 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display1' },
            'Events Table'
          ),
          _react2.default.createElement(
            _Paper2.default,
            { className: classes.root },
            _react2.default.createElement(
              _Table2.default,
              { className: classes.table },
              _react2.default.createElement(
                _Table.TableHead,
                null,
                _react2.default.createElement(
                  _Table.TableRow,
                  null,
                  _react2.default.createElement(
                    _Table.TableCell,
                    { numeric: true },
                    'Sr No.'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Event Type'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Game'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Game Mode'
                  ),
                  _react2.default.createElement(
                    _Table.TableCell,
                    null,
                    'Time'
                  )
                )
              ),
              _react2.default.createElement(
                _Table.TableBody,
                null,
                events.map(function (event, index) {
                  return _react2.default.createElement(
                    _Table.TableRow,
                    { key: index },
                    _react2.default.createElement(
                      _Table.TableCell,
                      { numeric: true },
                      index + 1
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      event.type
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      event.selectedGame.name
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      event.gameMode ? event.gameMode.name : '__'
                    ),
                    _react2.default.createElement(
                      _Table.TableCell,
                      null,
                      event.timeStamp
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return EventsTable;
}(_react.Component);

EventsTable.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(EventsTable);