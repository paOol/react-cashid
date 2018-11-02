'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  .badgerButton {\n    cursor: pointer;\n    display: inline-block;\n    min-height: 1rem;\n    outline: 0;\n    border: none;\n    border-radius: 5px;\n    vertical-align: baseline;\n    background: #e0e1e2 none;\n    color: rgba(0, 0, 0, 0.6);\n    font-family: Lato, \'Helvetica Neue\', Arial, Helvetica, sans-serif;\n    margin: 0 0.25rem 0 0;\n    padding: 0.75rem 1.5rem 0.75rem;\n    color: #ffffff;\n    &.red {\n      background: #dc3545;\n    }\n    &.blue {\n      background: #0062cc;\n    }\n    &.orange {\n      background: #f59332;\n    }\n    &.grey {\n      background: #4d4d4d;\n    }\n    &.green {\n      background: #28a745;\n    }\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n'], ['\n  display: block;\n  .badgerButton {\n    cursor: pointer;\n    display: inline-block;\n    min-height: 1rem;\n    outline: 0;\n    border: none;\n    border-radius: 5px;\n    vertical-align: baseline;\n    background: #e0e1e2 none;\n    color: rgba(0, 0, 0, 0.6);\n    font-family: Lato, \'Helvetica Neue\', Arial, Helvetica, sans-serif;\n    margin: 0 0.25rem 0 0;\n    padding: 0.75rem 1.5rem 0.75rem;\n    color: #ffffff;\n    &.red {\n      background: #dc3545;\n    }\n    &.blue {\n      background: #0062cc;\n    }\n    &.orange {\n      background: #f59332;\n    }\n    &.grey {\n      background: #4d4d4d;\n    }\n    &.green {\n      background: #28a745;\n    }\n    &:hover {\n      opacity: 0.8;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cashid = require('cashid');

var _cashid2 = _interopRequireDefault(_cashid);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactQrSvg = require('react-qr-svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CashId = function (_React$Component) {
  _inherits(CashId, _React$Component);

  function CashId(props) {
    _classCallCheck(this, CashId);

    var _this = _possibleConstructorReturn(this, (CashId.__proto__ || Object.getPrototypeOf(CashId)).call(this, props));

    _this.state = { web4bch: null, cashIDuri: '' };
    return _this;
  }

  _createClass(CashId, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window.web4bch !== 'undefined') {
        var uri = this.generateURI();

        var web4bch = new window.Web4Bch(window.web4bch.currentProvider);

        this.setState({
          cashIDuri: uri,
          web4bch: web4bch
        });
      } else {
        console.log('web4bch not defined');
      }
    }
  }, {
    key: 'generateURI',
    value: function generateURI() {
      var _props = this.props,
          domain = _props.domain,
          path = _props.path,
          action = _props.action,
          data = _props.data,
          metadata = _props.metadata;

      var cashid = new _cashid2.default(domain, path);
      var uri = cashid.createRequest(action, data, metadata);
      return uri;
    }
  }, {
    key: 'badgerSign',
    value: function badgerSign(request) {
      var web4bch = this.state.web4bch;
      if ((typeof web4bch === 'undefined' ? 'undefined' : _typeof(web4bch)) === undefined) {
        window.open('https://badgerwallet.cash/#/install');
      } else {
        web4bch.bch.sign(web4bch.bch.defaultAccount, request, function (err, res) {
          console.log('res', res);
          if (err) return;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        CashIDdiv,
        null,
        this.state.cashIDuri,
        _react2.default.createElement(
          'div',
          null,
          this.state.cashIDuri && _react2.default.createElement(_reactQrSvg.QRCode, { value: this.state.cashIDuri, style: { width: 200 } })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          {
            className: this.props.color + ' badgerButton',
            onClick: function onClick() {
              _this2.badgerSign(_this2.state.cashIDuri);
            }
          },
          'Login with badger'
        )
      );
    }
  }]);

  return CashId;
}(_react2.default.Component);

var CashIDdiv = _styledComponents2.default.div(_templateObject);
exports.default = CashId;