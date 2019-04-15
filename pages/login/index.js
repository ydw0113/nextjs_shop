import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "next/link";
import Router from "next/router";
import firebase from "../firebase";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };
  setEmail = value => {
    this.setState({ email: value });
  };
  setPassword = value => {
    this.setState({ password: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <main>
          <Paper>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={e => e.preventDefault() && false}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="off"
                  autoFocus
                  value={email}
                  onChange={e => this.setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={e => this.setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.login}
              >
                Sign in
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                href="/register"
              >
                Register
              </Button>
            </form>
          </Paper>
        </main>
      </>
    );
  }
  login = () => {
    try {
      firebase.login(this.state.email, this.state.password).then(() => {
        Router.push(`/`);
      });
    } catch (error) {
      alert(error.message);
    }
  };
}

export default SignIn;
