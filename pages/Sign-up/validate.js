export const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.fullname) {
    errors.fullname = "Required";
  } else if (!(values.fullname.length > 2 && values.fullname.length < 16)) {
    errors.fullname = "Must be from 3 characters till 15";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (!(values.password.length > 4)) {
    errors.password = "Must be 5 or more than 5 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (!(values.confirmPassword === values.password)) {
    errors.confirmPassword = "Passwords must match";
  }

  return errors;
};
