import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 40,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

export default function Testimonials({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={1}>
          <Box mb={2}>
            <Typography
              variant="h6"
              component="h3"
              style={{ color: theme.palette.grey[800] }}
              align="center"
            >
              {content["header"]}
            </Typography>
          </Box>
          <Grid container spacing={5} alignItems="center" justify="center">
            <Grid item xs={6} sm={4} md={2}>
              <img src={content["logo1"]} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content["logo2"]} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content["logo3"]} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content["logo4"]} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content["logo5"]} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content["logo6"]} alt="" className={classes.logo} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
