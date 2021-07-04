import React, { Component } from "react";
import "./Home.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Home extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    // const classes = this.useStyles();
    return (
      <div className='Home'>
        <h1>Introducir usuario</h1>
        <form noValidate autoComplete='off'>
          <TextField id='standard-basic' label='Nombre de usuario' />
          <Button variant='contained' color='primary'>
            Primary
          </Button>
        </form>
      </div>
    );
  }
}

export default Home;
