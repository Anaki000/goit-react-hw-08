import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { loginThunk } from "../redux/auth/operations";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="email" placeholder="enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="enter your password"
          />
          <button type="submit">Login</button>
          <p>
            Don't have account? <NavLink to="/register">Sing up</NavLink>
          </p>
          <NavLink to="/">Back to home</NavLink>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
