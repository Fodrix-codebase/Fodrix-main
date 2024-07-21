import React from "react";
import "../css/searchfunction.css";
export default class SearchFunction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }
  renderSuggestion() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul className="ul_search">
        {suggestions.map((item) => (
          <li
            className="li_search"
            onClick={() => this.suggestionSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <div className="form_home">
          <form
            action="http://localhost:3000/wedding"
            target="_blank"
            method="get"
          >
            <i class="fas fa-search"></i>
            <input
              value={text}
              onChange={this.onTextChanged}
              type="text"
              placeholder="Search"
            />
          </form>
        </div>

        {this.renderSuggestion()}
      </div>
    );
  }
}
