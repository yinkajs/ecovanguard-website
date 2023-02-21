import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import image from "../../assets/tree.svg";
import GoogleIcon from "../../assets/google_icon.svg";
import FacebookIcon from "../../assets/facebook_icon.svg";
import { Link } from "react-router-dom";
import "./index.css";
import InputComponent from "./../Input/input";
import ButtonLink from "./../Button/button";
const Login = ({ signup }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Please enter fullname"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter an email"),
      password: Yup.string().required("Enter your password"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="signIn-wrapper">
      <main>
        <div className="signIn-header">
          <LoginHeader signup={signup} />
        </div>

        <div className="signIn-container">
          <div className="signIn-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="details">
                {signup && (
                  <div>
                    <label htmlFor="fullName">Full Name</label>
                    <InputComponent
                      className={formik.errors.fullName && "input-style"}
                      type="text"
                      name="fullName"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      placeholder="Input your Full name"
                      required
                    />
                    {formik.errors.fullName && (
                      <small className="error-message">
                        {formik.errors.fullName}
                      </small>
                    )}
                  </div>
                )}
                <div>
                  <label htmlFor="email">E-mail</label>
                  <InputComponent
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Input your active e-mail"
                    required
                  />
                  {formik.errors.email && (
                    <small className="error-message">
                      {formik.errors.email}
                    </small>
                  )}
                </div>
                <div>
                  <div className="signIn-password no-margin-bottom">
                    <label htmlFor="password">Password</label>
                    <a href="" className="forgot-password">
                      Forgot your password?
                    </a>
                  </div>
                  <InputComponent
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Input your password"
                    required
                  />
                  {formik.errors.password && (
                    <small className="error-message">
                      {formik.errors.password}
                    </small>
                  )}
                </div>
              </div>
              <div className="policy-checkBox margin-block">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="check">
                  I agree to Ecovanguard's <a href="">privacy policy</a>
                </label>
              </div>
              <div>
                <ButtonLink className="full-width" type="submit">
                  Sign In
                </ButtonLink>
              </div>
            </form>
            <div>
              <ButtonLink link className="link-btn">
                <img src={GoogleIcon} alt="Google icon" className="icons" />
                Sign in with Google
              </ButtonLink>
              <ButtonLink link className="link-btn">
                <img src={FacebookIcon} alt="Facebook icon" className="icons" />
                Sign in with Facebook
              </ButtonLink>
            </div>
          </div>
          <div className={"signIn-img"}>
            <img
              src={image}
              alt="a vector, green tree with recycle bin"
              width={800}
              height={800}
            />
            <h3>
              With your proper waste management, the earth can become greener
              than ever
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};
const LoginHeader = ({ signup }) => {
  return (
    <>
      {!signup ? (
        <>
          <h1>Sign in to saving Nature</h1>
          <p>
            <span>New here? </span> <Link to="/signup">Sign up</Link>
          </p>
        </>
      ) : (
        <>
          <h1>Sign up to saving Nature</h1>
          <p>
            <span>Already a member?</span> <Link to="/signin">Sign in</Link>
          </p>
        </>
      )}
    </>
  );
};
export default Login;
