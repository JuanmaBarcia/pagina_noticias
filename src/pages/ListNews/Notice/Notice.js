import React, { Component } from "react";
import "./Notice.scss";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  useStyles = () => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  render() {
    const classes = this.useStyles();
    let { title, urlToImage, url, description } = this.props.data;
    return (
      <div className='Notice'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component='img'
              alt='Foto Noticia'
              height='140'
              image={urlToImage}
              title='FOto Noticia'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              <a href={url}>Ver más...</a>
            </Button>
            <Button size='small' color='primary'>
              <span onClick={this.props.remove}>Borrar noticia</span>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Notice;
