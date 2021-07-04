import React, { Component } from "react";
import "./Form.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  prueb = () => {
    console.log(`prueba****`);
    console.log(this.props);
    return <h2>hola</h2>;
  };

  render() {
    return (
      <div className='Form'>
        <h1>Crear Noticia</h1>
        {this.props.data}
        <form noValidate autoComplete='off'>
          <TextField name='title' id='standard-basic' label='Título' />
          <TextField name='url' id='standard-basic' label='URL Noticia' />
          <TextField name='urlImg' id='standard-basic' label='URL Imagen' />
          <TextField
            name='descrption'
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
