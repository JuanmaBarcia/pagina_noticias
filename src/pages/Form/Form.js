import React, { Component } from "react";
import "./Form.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className='Form'>
        <h1>Crear Noticia</h1>
        <form noValidate autoComplete='off'>
          <TextField id='standard-basic' label='Título' />
          <TextField id='standard-basic' label='URL Noticia' />
          <TextField id='standard-basic' label='URL Imagen' />
          <TextField
            id='standard-multiline-static'
            label='Descripción'
            multiline
            rows={5}
          />
          <Button variant='contained' color='primary'>
            Primary
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
