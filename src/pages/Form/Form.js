import React, { Component } from "react";
import "./Form.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNotice: {},
      isCreated: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const url = e.target.url.value;
    const urlToImage = e.target.urlImg.value;
    const description = e.target.description.value;
    let noticia = {
      title,
      url,
      urlToImage,
      description,
    };
    console.log(noticia);

    await this.setState({ newNotice: noticia });
    console.log(this.state.newNotice);

    this.props.addNewArticle(this.state.newNotice);
    this.setState({ isCreated: true });
  };

  render() {
    if (this.state.isCreated) {
      return <Redirect to='/list' />;
    } else {
      return (
        <div className='Form'>
          <h1>Crear Noticia</h1>
          {this.props.data}
          <form noValidate autoComplete='off' onSubmit={this.handleSubmit}>
            <TextField name='title' id='standard-basic' label='Título' />
            <TextField name='url' id='standard-basic' label='URL Noticia' />
            <TextField name='urlImg' id='standard-basic' label='URL Imagen' />
            <TextField
              name='description'
              id='standard-multiline-static'
              label='Descripción'
              multiline
              rows={5}
            />
            <Button variant='contained' color='primary' type='submit'>
              Crear noticia
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default Form;
