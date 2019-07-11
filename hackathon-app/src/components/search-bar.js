import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchTastes } from '../actions'

class SearchBar extends Component {
  renderField(field) {
    const { meta: {touched, error }} = field;
    const className = `form-group ${touched && error ? 'has-danger': '' }`;

    return (
      <div className = {className}>
        <label>{field.label}</label>
        <input className='form-control' type='text' {...field.input} />
        <div className = 'text-help' style={{color: 'red'}}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
      this.props.fetchTastes(values.query);
    }

  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label='Search'
          name='query'
          component={this.renderField}
         />
          <button type="submit" className="btn btn-primary">Submit</button>
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

const searchBar = reduxForm({
  validate,
  form: 'searchNew'
})(SearchBar);

export default connect(mapStateToProps, mapDispatchToProps)(searchBar);
