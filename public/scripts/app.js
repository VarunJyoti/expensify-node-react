"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            options: ["sa", "ds"]
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.pickOptions = _this.pickOptions.bind(_this);
        _this.handleadd = _this.handleadd.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState(function () {
                return {
                    options: JSON.parse(localStorage.getItem("options")) || []
                };
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length != this.state.options.length) {
                localStorage.setItem("options", JSON.stringify(this.state.options));
            }
        }
    }, {
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(option) {
            this.setState(function (p) {
                return {
                    options: p.options.filter(function (r) {
                        return r != option;
                    })
                };
            });
        }
    }, {
        key: "handleadd",
        value: function handleadd(option) {
            this.setState(function (p) {
                return {
                    options: p.options.concat([option])
                };
            });
        }
    }, {
        key: "pickOptions",
        value: function pickOptions() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: "new title", subtitle: "subtitle" }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    pickOptions: this.pickOptions }),
                React.createElement(Options, {
                    options: this.state.options,
                    deleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { addOption: this.handleadd })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: !props.hasOptions,
                onClick: props.pickOptions },
            "What should i do 123"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "ul",
            null,
            props.options.map(function (r, i) {
                return React.createElement(Option, { text: r, key: i, handleDeleteOption: props.handleDeleteOption });
            })
        ),
        React.createElement(
            "button",
            { onClick: props.deleteOptions },
            "removeAll"
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "p",
        null,
        React.createElement(
            "li",
            null,
            props.text
        ),
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.text);
                } },
            "Remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: "addOption",
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            if (option) {
                this.props.addOption(option);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.addOption },
                React.createElement("input", { type: "text", name: "option" }),
                React.createElement(
                    "button",
                    { type: "submit" },
                    "Add"
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

/*const User = (props) => {
    return (
        <div>
            <p>{Mddssds}</p>
        </div>
    )
}*/

ReactDOM.render(React.createElement(App, null), document.getElementById("main"));
