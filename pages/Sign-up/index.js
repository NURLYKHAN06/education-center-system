import React, { useState } from "react";
import Head from "next/head";
import { useFormik } from "formik";

import Header from "../../components/Header";
import { Select, TextInputField, Button } from "evergreen-ui";

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
      console.log(values);
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

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default SignUp;
