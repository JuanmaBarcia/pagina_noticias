import React, { Component } from "react";
import "./Home.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { userContext } from "../../context/userContext";

class Home extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    const userCont = this.context;
    userCont.loginUser(user);
  };

  handleChange = (event) => this.setState({ name: event.target.value });

  render() {
    return (
      <div className='Home'>
        <h1>Introducir usuario</h1>
        <form noValidate autoComplete='off' onSubmit={this.handleSubmit}>
          <TextField
            id='standard-basic'
            label='Nombre de usuario'
            onChange={this.handleChange}
          />
          <Button variant='contained' color='primary'>
            Primary
          </Button>
        </form>
      </div>
    );
  }
}

export default Home;
