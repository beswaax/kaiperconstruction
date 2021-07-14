import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "../../Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
Typography;
import { useRouter } from "next/router";
import {
  Typography,
  useTheme,
  useScrollTrigger,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.nav,
    marginTop: 70,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.nav.main,
    boxShadow: "none",
  },
  toolbar: { toolbar: theme.mixins.toolbar, minHeight: 50 },
  brand: {
    lineHeight: 1,
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginRight: "auto",
    },
  },
  link: {
    marginRight: theme.spacing(5),
    color: [theme.palette.common.white],
    borderBottom: "3px solid transparent",
    transition: "border-bottom-color 0.5s ease-in-out",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
      borderBottomColor: theme.palette.common.white,
      textDecoration: "none",
    },
  },
  linkMenu: {
    color: [theme.palette.common.white],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkDifferent: {
    marginRight: "auto",
    color: [theme.palette.common.white],
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  linkSelectedDifferent: {
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none",
    },
  },
  linkSelected: {
    marginRight: theme.spacing(5),
    color: theme.palette.common.white,
    borderBottom: "3px solid white",
    transition: "border-bottom-color 0.5s ease-in-out",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
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
    width: 240,
  },
  listItem: {
    // backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    borderRadius: 1,
    color: theme.palette.common.white,
  },
  listItemSmaller: {
    paddingLeft: "2.5rem",
    boxShadow: "none",
    borderRadius: 1,
    color: theme.palette.grey[200],
  },
  calendlyListItem: {
    marginTop: "0.2rem",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
  calendlyLink: {
    textDecoration: "none",
    fontWeight: 600,
    "&:hover": {
      textDecoration: "none",
    },
    marginRight: theme.spacing(2),
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 19,
    paddingLeft: 19,
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  services: {
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));

export default function Navigation({ tabValue, setTabValue }) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();

  const [state, setState] = React.useState({ open: false });

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const ScrollHandler = (props) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: props.window ? window() : undefined,
    });

    return React.cloneElement(props.children, {
      style: {
        backgroundColor: trigger
          ? "#202024"
          : matchesSM
          ? "#202024"
          : "transparent",
        color: trigger ? "white" : "black",
        transition: trigger ? "0.3s" : "0.5s",
        boxShadow: "none",
        padding: "10px 0px",
      },
    });
  };

  const content = {
    brand: {
      image: "/assets/logo1/vector/default-monochrome.svg",
      width: 160,
    },
    drawerBrand: "/assets/logo1/vector/default-monochrome.svg",
    link1: "START",
    link2: "ABOUT",
    link3: "SERVICES",
    link4: "CAREERS",
    link5: "TEAM",
    link6: "PORTFOLIO",
    link7: "CONTACT",
    link8: "Free Consultation",
    servicesLinks: {
      link1: "Accounting",
      link2: "Bookkeeping",
      link3: "E-Commerce Taxation",
      link4: "Personal Taxation",
      link5: "Corporate Taxation",
      link6: "Real Estate Taxation",
    },
    "primary-action": "Free Consultation",
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  useEffect(() => {
    if (router.pathname === "/" && tabValue !== 0) {
      setTabValue(0);
    } else if (router.pathname === "/about" && tabValue !== 1) {
      setTabValue(1);
    } else if (router.pathname === "/services" && tabValue !== 2) {
      setTabValue(2);
    } else if (router.pathname === "/career" && tabValue !== 3) {
      setTabValue(3);
    } else if (router.pathname === "/team" && tabValue !== 4) {
      setTabValue(4);
    } else if (router.pathname === "/portfolio" && tabValue !== 5) {
      setTabValue(5);
    } else if (router.pathname === "/contact" && tabValue !== 6) {
      setTabValue(6);
    }
  }, [setTabValue, tabValue, router.pathname]);

  return (
    <ScrollHandler>
      <AppBar
        position={matchesSM ? "relative" : "fixed"}
        color={matchesSM ? "inherit" : "transparent"}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link
            href="/"
            color="primary"
            underline="none"
            variant="h5"
            className={classes.brand}
          >
            {brand}
          </Link>

          <Link
            className={tabValue === 0 ? classes.linkSelected : classes.link}
            href="/"
            variant="subitle1"
            color="textPrimary"
            variant="body1"
          >
            {content["link1"]}
          </Link>
          <Link
            href="/about"
            color="textPrimary"
            variant="body1"
            className={tabValue === 1 ? classes.linkSelected : classes.link}
          >
            {content["link2"]}
          </Link>
          <Link
            href="/services"
            color="textPrimary"
            variant="body1"
            className={tabValue === 2 ? classes.linkSelected : classes.link}
          >
            {content["link3"]}
          </Link>

          <Link
            href="/career"
            color="textPrimary"
            variant="body1"
            className={tabValue === 3 ? classes.linkSelected : classes.link}
          >
            {content["link4"]}
          </Link>
          <Link
            href="/team"
            color="textPrimary"
            variant="body1"
            className={tabValue === 4 ? classes.linkSelected : classes.link}
          >
            {content["link5"]}
          </Link>
          <Link
            href="/portfolio"
            color="textPrimary"
            variant="body1"
            className={tabValue === 5 ? classes.linkSelected : classes.link}
          >
            {content["link6"]}
          </Link>
          <Link
            href="/contact"
            color="textPrimary"
            variant="body1"
            className={tabValue === 6 ? classes.linkSelected : classes.link}
          >
            {content["link7"]}
          </Link>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            disableRipple
            disableTouchRipple
            className={classes.menuButton}
            onClick={toggleDrawer(!state.open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="left"
          open={state.open}
          onClose={toggleDrawer(false)}
        >
          <div className={classes.drawerContainer}>
            <List>
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link1"]}
                component={Link}
                href="/"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link1"]} />
              </ListItem>
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link2"]}
                component={Link}
                href="/about"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link2"]} />
              </ListItem>{" "}
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link3"]}
                component={Link}
                href="/services"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link3"]} />
              </ListItem>
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link4"]}
                component={Link}
                href="/career"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link4"]} />
              </ListItem>
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link5"]}
                component={Link}
                href="/contact"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link5"]} />
              </ListItem>
              <ListItem
                className={classes.listItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link5"]}
                component={Link}
                href="/portfolio"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link6"]} />
              </ListItem>
              <ListItem
                className={classes.calendlyListItem}
                disableRipple
                disableTouchRipple
                button
                key={content["link6"]}
                component={Link}
                href="/contact"
                onClick={() => setState({ open: !state.open })}
              >
                <ListItemText primary={content["link7"]} />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </AppBar>
    </ScrollHandler>
  );
}
