import React, { Component } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import EditIcon from "@material-ui/icons/Edit";
import BallotIcon from "@material-ui/icons/Ballot";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { userContext } from "../../../context/userContext";

class Nav extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props);
    this.state = {
      state: {},
    };
  }

  useStyles = () => ({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });

  classes = this.useStyles();

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ ...this.state, [anchor]: open });
  };

  logout = () => {
    const userCont = this.context;
    if (userCont.user.name !== "") {
      userCont.logoutUser();
    }
  };

  list = (anchor) => (
    <div
      className={clsx(this.classes.list, {
        [this.classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}>
      <List>
        <Link to='/home'>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to='/form'>
          <ListItem button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText>Crear noticia</ListItemText>
          </ListItem>
        </Link>
        <Link to='/list'>
          <ListItem button>
            <ListItemIcon>
              <BallotIcon />
            </ListItemIcon>
            <ListItemText>Noticias</ListItemText>
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText onClick={this.logout}>Logout</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  render() {
    return (
      <nav className='Nav'>
        <React.Fragment key='top'>
          <Button onClick={this.toggleDrawer("top", true)}>
            <MenuIcon />
          </Button>
          <Drawer
            anchor='top'
            open={this.state["top"]}
            onClose={this.toggleDrawer("top", false)}>
            {this.list("top")}
          </Drawer>
        </React.Fragment>
      </nav>
    );
  }
}

export default Nav;
