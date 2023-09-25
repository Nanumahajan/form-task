import React, { useRef, useState } from 'react';
import './uncontrolled.css';

function UnControlled() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const errors = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    for (const field in errors) {
      errors[field] = '';
    }

    if (username.trim() === '') {
      errors.username = 'Username is required';
    } else if (username.length < 3) {
      errors.username = 'Username must be at least 3 characters long';
    } else if (username.length > 20) {
      errors.username = 'Username must be not more than 20characters ';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match';
    }

    for (const field in errors) {
      const errorElement = document.getElementById(`error-${field}`);
      if (errors[field]) {
        errorElement.innerText = errors[field];
      } else {
        errorElement.innerText = '';
      }
    }

    if (Object.values(errors).every((error) => !error)) {
      const formData = { username, email, password, confirmPassword };
      setSubmittedData(JSON.stringify(formData, null, 2));
      clearFormFields();
    }
  };

  const clearFormFields = () => {
    usernameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    confirmPasswordRef.current.value = '';
  };

  return (
    <>
    {submittedData ? (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <pre>{submittedData}</pre>
        </div>
      ) :(
    <div className="form-container">
      <div className="form-wrapper">
        <form noValidate className="registration" onSubmit={handleSubmit}>
          <h1>👋 Welcome!</h1>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" ref={usernameRef} />
            <div id="error-username" className="error"></div>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" ref={emailRef} />
            <div id="error-email" className="error"></div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" ref={passwordRef} />
            <div id="error-password" className="error"></div>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" ref={confirmPasswordRef} />
            <div id="error-confirmPassword" className="error"></div>
          </div>
          <button className="pure-material-button-contained center-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
      )
    }
    </>
  );
}

export default UnControlled