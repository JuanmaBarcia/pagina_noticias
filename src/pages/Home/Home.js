import React, { Component } from "react";
import "./Home.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { userContext } from "../../context/userContext";
import { Redirect } from "react-router";

class Home extends Component {
  static contextType = userContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      isLogged: false,
    };
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
    await this.setState({ isLogged: true });
  };

  componentDidMount = async () => {
    const userCont = this.context;

    if (userCont.user.name !== "") {
      await this.setState({ isLogged: true });
    }
  };

  handleChange = (event) => this.setState({ name: event.target.value });

  render() {
    if (this.state.isLogged) {
      return <Redirect to='/list' />;
    } else {
      return (
        <div className='Home'>
          <h1>Introducir usuarioa</h1>
          <form noValidate autoComplete='off' onSubmit={this.handleSubmit}>
            <TextField
              id='standard-basic'
              label='Nombre de usuario'
              onChange={this.handleChange}
            />
            <Button variant='contained' color='primary' type='submit'>
              Login
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default Home;
