import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
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

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help" style={{ color: 'red' }}>
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values); 
    this.props.fetchTastes(values.query);
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <div>
        <div>app index things...</div>
        <button onClick={this.handleClick} type="button" className="btn btn-primary">generate search</button>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Search"
          name="query"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <ul className="list-group">
          {this.renderTastes()}
        </ul>
      </form>

      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.query) {
    errors.query = "Search for something...";
  }
  return errors;
}


function mapStateToProps({ tastes }) {
  return { tastes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTastes }, dispatch);
}

const searchAppIndex = reduxForm({
  validate,
  form: 'searchNew'
})(AppIndex);

export default connect(mapStateToProps, mapDispatchToProps)(searchAppIndex);