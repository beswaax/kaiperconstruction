import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import {
  Container,
  Button,
  Grid,
  Hidden,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.footerAndNav,
    color: "white",
  },
  button: {
    borderRadius: 20,
  },
  buttonContainer: {
    paddingLeft: "auto",
    paddingRight: 10,
    marginRight: "1.1rem",
  },
  leftGridItem: {
    marginRight: "auto",
  },
  rightGridItem: {
    marginRight: 20,
  },
  phone: {
    marginLeft: "3rem",
  },
  icon: {
    paddingTop: 1,
    marginRight: 4,
  },
  icon2: {
    paddingTop: 3.5,
    marginRight: 4,
  },
  text: {
    textDecoration: "none",
    color: "#CBCBCE",

    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Navigation(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    address: "Richard-Wagner Str.14, Aachen",
    tel: "604-664-0680",
    schedule: "9AM - 3PM",
    button: "Free Consultation",
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box
          py={matchesSM ? 1 : 2}
          px={matchesSM ? 2.5 : 3}
          style={{ borderBottom: "0.1px solid grey" }}
        >
          <Grid
            container
            spacing={1}
            alignItems={matchesXS ? "space-between" : "center"}
            // justify="center"
          >
            <Grid item className={classes.leftGridItem}>
              <Grid container>
                <Grid item>
                  <RoomOutlinedIcon
                    color="primary"
                    style={{ fontSize: "1.2rem" }}
                    className={classes.icon}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    className={classes.text}
                    component={"a"}
                    target="_blank"
                    href="https://www.google.com/maps/place/Guinness+Tower/@49.2877332,-123.1182842,15z/data=!4m5!3m4!1s0x0:0xe9530f2560d1a697!8m2!3d49.2877338!4d-123.1182838"
                  >
                    {content.address}{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.rightGridItem}>
              <Grid container>
                <Grid item>
                  <PhoneOutlinedIcon
                    color="primary"
                    style={{ fontSize: "1.2rem" }}
                    className={classes.icon2}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    className={classes.text}
                    component={"a"}
                    href="tel:+16046640680"
                  >
                    {content.tel}{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item className={classes.rightGridItem}>
              <Grid container>
                <Grid item>
                  <QueryBuilderOutlinedIcon
                    color="primary"
                    className={classes.icon}
                    style={{ fontSize: "1.2rem" }}
                  />
                </Grid>

                <Grid item>
                  <Typography variant="body2" className={classes.text}>
                    {content.schedule}{" "}
                  </Typography>
                </Grid>
              </Grid>
            </Grid> */}
            <Hidden smDown>
              <Grid item className={classes.buttonContainer}>
                <Button
                  href="https://calendly.com/accountingservices-philly/60min"
                  target="_blank"
                  color="primary"
                  className={classes.button}
                  variant="outlined"
                >
                  {content.button}
                </Button>
              </Grid>
            </Hidden>
            <Grid item className={classes.line}></Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
