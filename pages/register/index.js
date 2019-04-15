import React from "react";
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
import firebase from "../firebase";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    quote: ""
  };
  setName = value => {
    this.setState({ name: value });
  };
  setEmail = value => {
    this.setState({ email: value });
  };
  setPassword = value => {
    this.setState({ password: value });
  };
  setQuote = value => {
    this.setState({ quote: value });
  };
  render() {
    const { name, email, password, quote } = this.state;

    return (
      <>
        <main>
          <Paper>
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register Account
            </Typography>
            <form onSubmit={e => e.preventDefault() && false}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="off"
                  autoFocus
                  value={name}
                  onChange={e => this.setName(e.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="off"
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
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="quote">Your Favorite Quote</InputLabel>
                <Input
                  name="quote"
                  type="text"
                  id="quote"
                  autoComplete="off"
                  value={quote}
                  onChange={e => this.setQuote(e.target.value)}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.onRegister}
              >
                Register
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                component={Link}
                href="/login"
              >
                Go back to Login
              </Button>
            </form>
          </Paper>
        </main>
      </>
    );
  }
  onRegister = () => {
    try {
      firebase.register(this.state.name, this.state.email, this.state.password);
      firebase.addQuote(this.state.quote);
    } catch (error) {
      alert(error.message);
    }
  };
}

export default Register;
