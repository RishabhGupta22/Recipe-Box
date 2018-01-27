var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = ReactBootstrap.Button;
var Panel = ReactBootstrap.Panel;
var Accordion = ReactBootstrap.Accordion;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var ListGroup = ReactBootstrap.ListGroup;
var ListGroupItem = ReactBootstrap.ListGroupItem;
var ControlLabel = ReactBootstrap.ControlLabel;

var Box = function (_React$Component) {
  _inherits(Box, _React$Component);

  function Box(props) {
    _classCallCheck(this, Box);

    var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));

    _this.close = function () {
      _this.setState({
        toggle: false
      });
    };

    _this.open = function (state) {
      _this.setState(_defineProperty({}, state, true));
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = {
      recipes: [{
        name: "Pumpkin Pie",
        ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]
      }, {
        name: "Spaghetti",
        ingredients: ["Noodles", "Tomato Sauce", "Meatballs(Optional)"]
      }, {
        name: "Pizza",
        ingredients: ["Pizza base", "Pizza sauce", "Onion", "Capsicum", "Tomato", "BBQ       Chicken", "Cheese (lots of it)", "Oregano", "Chilli Flakes"]
      }, {
        name: "Chicken Tikka",
        ingredients: ["Boneless Chicken (Cut in pieces)", "Yogurt", "Cream", "Butter", "Garlic Onion Paste", "Tomatoes", "Red Chilli Powder", "Cardamoms", "Asafoetida", "Kastoori Methi", "Coriander Powder"]
      }],
      toggle: false,
      editNum: 0,
      fromAdd: false
    };
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handleEdit = _this.handleEdit.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(Box, [{
    key: "handleDelete",
    value: function handleDelete(e) {
      if (this.state.recipes.length == 1) {
        alert("Recipe Box cannot be empty !");
        return;
      }
      var recipes = this.state.recipes;
      recipes.splice(e.target.value, 1);
      this.setState({
        recipes: recipes,
        editNum: 0
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "handleSave",
    value: function handleSave(e) {
      if ($("#recipeHead").val() == "") {
        alert("Recipe's Name cannot be empty !");
        return;
      }
      var newName = $("#recipeHead").val();
      var arr = $("#recipeBody").val().split(",");

      this.state.recipes[this.state.editNum].ingredients = arr;
      this.state.recipes[this.state.editNum].name = newName;
      this.setState({
        toggle: false
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(e) {
      this.setState({
        toggle: true,
        editNum: e.target.value,
        fromAdd: false
      });
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      if (this.state.fromAdd) this.state.recipes.pop();
      this.setState({
        toggle: false,
        editNum: 0
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (localStorage.getItem('recipeBoxRecipes') && localStorage.getItem('recipeBoxRecipes') !== null) this.setState(JSON.parse(localStorage.getItem('recipeBoxRecipes')));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      localStorage.setItem('recipeBoxRecipes', JSON.stringify(this.state));
    }
  }, {
    key: "handleAdd",
    value: function handleAdd() {
      this.state.recipes.push({
        name: "",
        ingredients: [""]
      });
      this.setState({
        toggle: true,
        editNum: this.state.recipes.length - 1,
        fromAdd: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.recipes.map(function (obj, index) {
        var list = obj.ingredients.map(function (item) {
          return React.createElement(
            ListGroupItem,
            { className: "listgrp", bsStyle: "warning" },
            item
          );
        });
        return React.createElement(
          Panel,
          {
            className: "text-center panelname",
            bsStyle: "warning",
            header: obj.name,
            eventKey: index
          },
          React.createElement(
            "h3",
            { className: "text-center" },
            "Ingredients"
          ),
          React.createElement("hr", null),
          React.createElement(
            ListGroup,
            null,
            list
          ),
          React.createElement(
            ButtonToolbar,
            { className: "butt" },
            React.createElement(
              Button,
              { bsStyle: "danger", onClick: _this2.handleDelete, value: index },
              "Delete Recipe \xA0",
              React.createElement("i", { className: "fa fa-trash fa-lg" })
            ),
            React.createElement(
              Button,
              { bsStyle: "warning", onClick: _this2.handleEdit, value: index },
              "Edit Recipe \xA0",
              React.createElement("i", { className: "fa fa-pencil-square-o fa-lg" })
            )
          )
        );
      });
      var editData = this.state.recipes[this.state.editNum].ingredients.join(",");
      var editName = this.state.recipes[this.state.editNum].name;
      return React.createElement(
        "div",
        null,
        React.createElement(
          Accordion,
          { className: "acc" },
          data
        ),
        React.createElement(
          Modal,
          { show: this.state.toggle, onHide: this.handleCancel },
          React.createElement(
            Modal,
            null,
            React.createElement(
              Modal.Title,
              null,
              "Add a New Recipe"
            )
          ),
          React.createElement(
            Modal.Body,
            null,
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                ControlLabel,
                null,
                "Recipe's Name"
              ),
              React.createElement(FormControl, {
                id: "recipeHead",
                type: "text",
                placeholder: "Enter name",
                defaultValue: editName,
                onChange: this.handleChange
              })
            ),
            React.createElement("br", null),
            React.createElement(
              FormGroup,
              null,
              React.createElement(
                ControlLabel,
                null,
                "Ingredients"
              ),
              React.createElement(
                FormControl,
                {
                  id: "recipeBody",
                  componentClass: "textarea",
                  rows: "6",
                  placeholder: "Enter the ingredients separated by a comma(,)"
                },
                editData
              )
            )
          ),
          React.createElement(
            Modal.Footer,
            null,
            React.createElement(
              Button,
              { bsStyle: "success", onClick: this.handleSave },
              "Save"
            ),
            React.createElement(
              Button,
              { bsStyle: "default", onClick: this.handleCancel },
              "Cancel"
            )
          )
        ),
        React.createElement(
          Button,
          {
            bsStyle: "primary",
            bsSize: "large",
            className: "add",
            onClick: this.handleAdd
          },
          "Add Recipe"
        )
      );
    }
  }]);

  return Box;
}(React.Component);

ReactDOM.render(React.createElement(Box, null), document.getElementById("app"));