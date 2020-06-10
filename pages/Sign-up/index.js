import React, { useState } from "react";
import Head from "next/head";
import { useFormik } from "formik";

import Header from "../../components/Header";
import { Select, TextInputField, Button } from "evergreen-ui";

import { auth } from "../../backend/config";
import { createUser } from "../../backend/api_user";

const validate = (values) => {
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

function SignUp() {
  const [userType, setUserType] = useState("student");
  const handleChangeUserType = ({ target }) => setUserType(target.value);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      createUser(values);
    },
  });
  return (
    <>
      <Head>
        <title>Регистрация</title>
      </Head>

      <Header />
      {/*  */}

      <Select value={userType} onChange={handleChangeUserType}>
        <option value="school">School</option>
        <option value="student">Student</option>
      </Select>

      <form onSubmit={formik.handleSubmit}>
        <TextInputField
          label="Email"
          name="email"
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="example@example.com"
          validationMessage={formik.errors.email}
        />

        <TextInputField
          label="Fullname"
          name="fullname"
          id="fullname"
          onChange={formik.handleChange}
          value={formik.values.fullname}
          placeholder="Lastname YourName"
          validationMessage={formik.errors.fullname}
        />

        <TextInputField
          label="Password"
          name="password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Difficult_Password123"
          validationMessage={formik.errors.password}
        />

        <TextInputField
          label="Confirm password"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="Difficult_Password123"
          validationMessage={formik.errors.confirmPassword}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default SignUp;
