import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "../core/Menu";
import { loginStart } from "../store/actions/index";
import * as actionTypes from "../store/actions/actionTypes";

const Signin = (props) => {
  const [userState, setUserState] = useState({});
  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    if (props.errors) setErrorState(props.errors);
  }, [props.errors]);

  useEffect(() => {
    if (props.auth.isAuthenticated) props.push("/dashboard");
  }, [props.auth]);

  useEffect(() => {
    return () => props.resetErrors();
  }, []);

  const inputChangeHandler = (e) => {
    let inputField = e.target.name;
    let inputValue = e.target.value;

    setUserState((prevState) => {
      return {
        ...prevState,
        [inputField]: inputValue,
      };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.login(userState, props.history);
  };

  return (
    <div>
      <Menu />
      {props.auth ? props.auth.email : null}
      <section className="signin">
        <h2>Sign in to StubHub</h2>

        <p class="error-placeholder">
          {errorState.error ? errorState.error : null}
        </p>

        <form onSubmit={formSubmitHandler}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={inputChangeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={inputChangeHandler}
          />
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <button type="submit">Sign in</button>
        </form>

        <h4>Connect with friends on StubHub</h4>

        <p>
          New to StubHub? <Link to="/signup">Create account</Link>
        </p>
        <p>
          Have an access code? <a href="#">Find your order</a>
        </p>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(loginStart(user)),
    resetErrors: () => dispatch({ type: actionTypes.RESET_ERRORS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
