import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";
import { registerThunk } from "../redux/auth/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Register</button>
          <p>
            Already have account? <NavLink to="/login">Sing in</NavLink>
          </p>
          <NavLink to="/">Back to home</NavLink>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
