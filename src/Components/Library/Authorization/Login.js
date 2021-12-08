import React, { useState, useRef } from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import { Captcha, captchaSettings } from 'reactjs-captcha';
import axios from "axios";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../../Redux/actions/auth";
import Register from "./Register";
import './Login.css';
import {useIntl} from "react-intl";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const displayErrorMessage = (value) => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          <div>Your input is wrong.</div>
          <div>Retype the characters from the picture</div>
        </div>
    );
  }
};

captchaSettings.set({
  captchaEndpoint:
      // 'http://smartbooker/botdetect-captcha-lib/simple-botdetect.php'
      'http://smartbooker.biz/botdetect-captcha-lib/simple-botdetect.php'
});

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInputSuccess, setCaptchaInputSuccess] = useState(true);
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const {locale} = useIntl();

  const handleLogin = (e) => {
    e.preventDefault();

    // setLoading(true);

    form.current.validateAll();

    // the user-entered captcha code value to be validated at the backend side
    let userEnteredCaptchaCode = captcha.getUserEnteredCaptchaCode();

    // the id of a captcha instance that the user tried to solve
    let captchaId = captcha.getCaptchaId();

    let postData = {
      userEnteredCaptchaCode: userEnteredCaptchaCode,
      captchaId: captchaId
    };

    // post the captcha data to the /your-app-backend-path on your backend.
    // make sure you import the axios in this view with: import axios from 'axios';
    axios.post(
        // 'http://smartbooker/botdetect-captcha-lib/basic.php',
        'http://smartbooker.biz/botdetect-captcha-lib/basic.php',
        postData, {headers: {'Content-Type': 'application/json; charset=utf-8'}})
        .then(response => {
          console.log('response.data: ', response.data);
          if (response.data.success === false) {
            // captcha validation failed; reload image
            captcha.reloadImage();
            // TODO: maybe display an error message, too
            setCaptchaInputSuccess(false);
          } else {
            // TODO: captcha validation succeeded; proceed with your workflow

            if (checkBtn.current.context._errors.length === 0) {
              dispatch(login(username, password))
                  .then(() => {
                    // props.history.push("/profile");
                    props.history.push("/");
                    // window.location.reload(); // может, не нужно перезагружать страницу, если мы и так на главной?
                  })
                  .catch(() => {
                    // setLoading(false);
                  });
            } else {
              // setLoading(false);
            }
          }
        });
  };

  if (isLoggedIn) {
    // return <Redirect to="/profile" />;
    return <Redirect to="/" />;
  }

  return (
      <div className="container mt-3">
        <div className="col-md-12">
          <div className="card card-container" style={{backgroundColor: '#f7f7f7'}}>
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />

            <Form id="yourFormWithCaptchaForm" method="POST"
                  onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="username">Username <sup>*</sup></label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password <sup>*</sup></label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                {/* captcha challenge: placeholder */}
                <Captcha captchaStyleName="yourFirstCaptchaStyle"
                         ref={(captcha) => {setCaptcha(captcha)}} />
                <label>
                  <span>Retype the characters from the picture: <sup>*</sup></span>
                  {/* captcha code: user-input textbox */}
                  <input id="yourFirstCaptchaUserInput" type="text"/>
                </label>
                {displayErrorMessage(captchaInputSuccess)}
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              <div className="form-group text-center">
                Don`t have an account yet?
              </div>

              <div className="form-group text-center">
                <Link to={`/${locale}/sign_up`} >
                  Sign Up
                </Link>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
  );
};

export default Login;
