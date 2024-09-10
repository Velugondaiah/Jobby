import { Component } from "react";
import {v4 as uuidv4} from "uuid"

import "./index.css";

class RegisterFrom extends Component {
  state = {
    name: "",
    password: "",
    showSubmitError: false,
    errorMsg: "",
  };

  onChangeUsernam = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangePasswor = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSucces = (jwtTkoken) => {
          console.log(`hello mama ${jwtTkoken}`)

  };

  onSubmitFailur = (errorMsg) => {
     console.log(errorMsg)
    
  };

  submitFor = async (event) => {
    event.preventDefault();
    const  id = uuidv4()
    const {  name, password } = this.state;
    const userDetails = {  name, password };
    const url = "https://gate-backend-9.onrender.com/users";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Fixed: Added Content-Type header.
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSubmitSucces(data.success);
    } else {
      this.onSubmitFailur(data.error_msg);
      console.log("click here")
    }
  };

  renderPasswordFiel = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePasswor}
        />
      </>
    );
  };

  renderUsernameFiel = () => {
    const { name } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={name}
          onChange={this.onChangeUsernam}
        />
      </>
    );
  };

  render() {
    const { showSubmitError, errorMsg } = this.state;
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitFor}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameFiel()}</div>
          <div className="input-container">{this.renderPasswordFiel()}</div>
          <button type="submit" className="login-button">
            Sing Up
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default RegisterFrom;