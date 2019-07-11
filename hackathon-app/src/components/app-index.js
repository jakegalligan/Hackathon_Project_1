import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTastes } from "../actions";

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.fetchTastes();
  }

  renderTastes() {
    return _.map(this.props.tastes, (taste, key) => {
      return (
        <li className="list-group-item" key={key}>
          <h4>{taste.Name}</h4>
          ({taste.Type})
            <p>{taste.wTeaser}</p>
          <a href={taste.wUrl}>{taste.wUrl}</a>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div>app index things...</div>
        <button onClick={this.handleClick} type="button" className="btn btn-primary">generate search</button>
        <ul className="list-group">
          {this.renderTastes()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ tastes }) {
  return { tastes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTastes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppIndex);