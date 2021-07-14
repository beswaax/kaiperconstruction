import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "../../Link";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import LayersIcon from "@material-ui/icons/Layers";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70,
    borderTop: "0.1px solid grey",
  },
  brand: {
    lineHeight: 1,
    marginRight: "auto",
  },
  link: {
    marginRight: theme.spacing(4),
    color: theme.palette.common.white,
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.light,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linkLast: {
    marginRight: theme.spacing(0),
    borderRadius: 20,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linkDrawer: {
    marginRight: theme.spacing(5),
    textDecoration: "none",
    color: theme.palette.common.black,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
  },

  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginLeft: "auto",
    color: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: theme.palette.footerAndNav,
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    brand: {
      image: "/assets/logo/vector/defaultlogo.svg",
      width: 200,
    },
    link1: "Home",
    link2: "About Us",
    link3: "Services",
    link4: "Careers",
    link5: "Contact Us",
    "primary-action": "Free Consultation",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="engineering link company logo"
        width={content.brand.width}
      />
    );
  } else {
    brand = content.brand.text || "";
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const handleClick = (e) => {
    setState({ open: !state.open });
  };

  return (
    <AppBar position="static" color="inherit" className={classes.appbar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Link
            href="/"
            color="textSecondary"
            underline="none"
            variant="h5"
            className={classes.brand}
          >
            {brand}
          </Link>
          <Link href="/" variant="body1" className={classes.link}>
            {content["link1"]}
          </Link>
          <Link href="/about" variant="body1" className={classes.link}>
            {content["link2"]}
          </Link>
          <Link href="/services" variant="body1" className={classes.link}>
            {content["link3"]}
          </Link>
          <Link href="/career" variant="body1" className={classes.link}>
            {content["link4"]}
          </Link>
          <Link href="/contact" variant="body1" className={classes.link}>
            {content["link5"]}
          </Link>
          <Button
            disableRipple
            disableFocusRipple
            disableTouchRipple
            variant="outlined"
            color="primary"
            href="/contact"
            className={classes.linkLast}
          >
            {content["primary-action"]}
          </Button>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disableRipple
            disableTouchRipple
            className={classes.menuButton}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
