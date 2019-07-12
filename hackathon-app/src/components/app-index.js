import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTastes, fetchArticles } from "../actions";
import SearchBar from "./search-bar";
import Taste from "./taste";

class AppIndex extends Component {

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.tastes, prevProps.tastes)) {
      if (this.props.tastes) {
        var key0 = _.keys(this.props.tastes)[0];
        var obj0 = this.props.tastes[key0];
        if (!obj0.hasOwnProperty('imageUrl')) {
          _.forIn(this.props.tastes, (value, key) => {
            this.props.fetchArticles(value.wUrlTitle);
          });
        }
      }
    }
  }

  renderTastes() {
    return _.map(this.props.tastes, (taste, key) => {
      return (
        <Taste taste={taste} key={key}/>
      );
    });
  }


  render() {

    return (
      <div>
        <nav className="navbar fixed-top navbar-dark bg-dark justify-content-center">
        <div className="navbar-brand">Hackathon App</div>
        <SearchBar />
        </nav>
        
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
