import { reduxForm } from "redux-form";
import StreamCreate from "../../components/streams/StreamCreate";

const validate = (formProps) => {
  const errors = {};
  console.log(formProps);
  if (!formProps.title) {
    errors.title = "You must enter a title!";
  }
  if (!formProps.description) {
    errors.description = "You must enter a description!";
  }
  return errors;
};

export const StreamCreateContainer = reduxForm({
  form: "StreamCreate",
  validate: validate,
})(StreamCreate);
