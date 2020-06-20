import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useFormik } from "formik";
import { connect, useDispatch } from "react-redux";

import Header from "../../components/Header";
import { Select, TextInputField, Button } from "evergreen-ui";

import { createUserStart } from "../../redux/user/actions";
import { validate } from "./validate";

function SignUp({ loginBtnLoader }) {
  const dispatch = useDispatch();

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
      dispatch(createUserStart(values));
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

        <Button type="submit" isLoading={loginBtnLoader}>
          Submit
        </Button>
      </form>
    </>
  );
}

const mapState = (state) => ({
  loginBtnLoader: state.loader.loginBtnLoader,
});

export default connect(mapState)(SignUp);
