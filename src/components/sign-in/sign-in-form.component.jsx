import React from "react";
import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SignInContainer } from "./sign-in-form.styles";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formFields;

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid Credentials");
        return;
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <SignInContainer>
      <h2>I already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          labelFor="email-2"
          required
          type="email"
          name="email"
          id="email-2"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          labelFor="password-2"
          type="password"
          name="password"
          id="password-2"
          value={password}
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
