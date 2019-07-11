import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import { fetchTastes } from "../actions";
import  SearchBar  from "./search-bar";

class AppIndex extends Component {
  constructor(props) {
    super(props);

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
    const { handleSubmit } = this.props;

    return (
      <div>
        <SearchBar />
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
