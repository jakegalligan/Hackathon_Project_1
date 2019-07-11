import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { Field, reduxForm } from "redux-form";
import { fetchTastes, fetchArticles } from "../actions";
import  SearchBar  from "./search-bar";
import Taste from "./taste";

class AppIndex extends Component {
  // constructor(props) {
  //   super(props);

  // }

  renderTastes() {
    return _.map(this.props.tastes, (taste, key) => {
      return (
        <Taste taste={taste} id={key} />
      );
    });
  }


  render() {
    // const { handleSubmit } = this.props;
    // for testing purposes
    // this.props.fetchArticles('Bj%C3%B6rk');

    return (
      <div>
        <SearchBar />
        <div className="cards">
          {this.renderTastes()}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ tastes }) {
  return { tastes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTastes, fetchArticles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppIndex);
