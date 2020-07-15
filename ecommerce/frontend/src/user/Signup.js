import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "../core/Menu";
import { registerStart } from "../store/actions/index";
import * as actionTypes from "../store/actions/actionTypes";

const Signup = (props) => {
  const [userState, setUserState] = useState({});
  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    if (props.errors) setErrorState(props.errors);
  }, [props.errors]);

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
    console.log(userState);
    props.register(userState, props.history);
  };

  return (
    <div>
      <Menu />

      <section className="register">
        <h2>Sign Up for StubHub</h2>

        <p class="error-placeholder">
          {errorState.error ? errorState.error : null}
        </p>

        <form action="" onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            onChange={inputChangeHandler}
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={inputChangeHandler}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={inputChangeHandler}
          />
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone"
            onChange={inputChangeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={inputChangeHandler}
          />
          <button type="submit">Sign Up</button>
          <p className="agreement">
            By purchasing or signing in, you agree to
            <a href="#">our user agreement</a> and acknowledge our
            <a href="register.html">privacy notice</a>.
          </p>
        </form>

        <h4>Connect with friends on StubHub</h4>

        <p className="bold">
          Have a StubHub account?<Link to="/signin">Sign in</Link>
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
const mapDisptachToProps = (dispatch) => {
  return {
    register: (user, history) => dispatch(registerStart(user, history)),
    resetErrors: () => dispatch({ type: actionTypes.RESET_ERRORS }),
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(withRouter(Signup));
