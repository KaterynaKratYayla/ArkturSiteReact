import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Captcha, captchaSettings } from 'reactjs-captcha';
import axios from "axios";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import {login, register} from "../../../Redux/actions/auth";
import {Link} from "react-router-dom";
import Login from "./Login";

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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const validFirstName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The first name must be between 3 and 20 characters.
      </div>
    );
  }
};

const validLastName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The last name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInputSuccess, setCaptchaInputSuccess] = useState(true);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };

  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

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
              dispatch(register(firstName, lastName, username, email, password))
                  .then(() => {
                    setSuccessful(true);
                  })
                  .catch(() => {
                    setSuccessful(false);
                  });
            }
          }
        });
  };

  return (
    <div className="col-md-12">
      <div className="card card-container" style={{backgroundColor: '#f7f7f7'}}>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form id="yourFormWithCaptchaForm" method="POST" onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="firstName">First name <sup>*</sup></label>
                <Input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={firstName}
                    onChange={onChangeFirstName}
                    validations={[required, validFirstName]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name <sup>*</sup></label>
                <Input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={lastName}
                    onChange={onChangeLastName}
                    validations={[required, validLastName]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username <sup>*</sup></label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email <sup>*</sup></label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
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
                  validations={[required, vpassword]}
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
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>

              <div className="form-group text-center">
                Have an account already?
              </div>

              <div className="form-group text-center">
                <Link to={"/sign_in"} >
                  Login
                </Link>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
