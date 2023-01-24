import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Nav";

const Signup = () => {
  const paperStyle = { padding: 20, width: 400, margin: "0 0 0 35%" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    password: Yup.string(8, "Password minimum length should be 8").required(
      "Required"
    ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });
  const navigate = useNavigate();
  const onSubmit = (props) => {
    console.log(props);
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(props),
    })
      .then((res) => {
        alert("Registered Successfully");
        navigate("/login");
      })
      .catch((err) => {
        alert("Registration fail");
      });
  };
  return (
    <>
      <Navbar />
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  helperText={<ErrorMessage name="name" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  helperText={<ErrorMessage name="email" />}
                />
                <FormControl component="fieldset" style={marginTop}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-label="gender"
                    name="gender"
                    style={{ display: "initial" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Field>
                </FormControl>
                <FormHelperText>
                  {<ErrorMessage name="gender" />}
                </FormHelperText>
                <Field
                  as={TextField}
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  helperText={<ErrorMessage name="phoneNumber" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter your password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={TextField}
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  helperText={<ErrorMessage name="confirmPassword" />}
                />
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms and conditions."
                />
                <FormHelperText>
                  {<ErrorMessage name="termsAndConditions" />}
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  color="primary"
                >
                  {props.isSubmitting ? "Loading" : "Sign up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};

export default Signup;
