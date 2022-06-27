import React from "react";
import { Field } from "redux-form";

class StreamCreate extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  inputField = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field name="title" component={this.inputField} label="Title" />
          <Field
            name="description"
            component={this.inputField}
            label="Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default StreamCreate;
