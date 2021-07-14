import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../Link";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {},
  cardRoot: {
    backgroundColor: theme.palette.secondary.main,
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  cardRoot2: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    boxShadow: "#0f0f0f",
    border: "1px solid lightgray",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
  button: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const IndividualJob = ({ job }) => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const basicContent = {
    firstCard: {
      title: "Learn more about us.",
      text: "Find out more about Lewis & Company and what drives us every day.",
      button: "Learn More",
    },
    secondCard: {
      title: "Don't see a job for you?",
      text: "Take a look at our other jobs or send us your CV and application to careers@lewisco.bc.ca",
      button: "SEE OTHER JOBS",
    },
  };

  const loremipsum =
    "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet";

  const content = job;

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justify="space-between"
        data-aos="fade-up"
      >
        <Grid item>
          <Box my={5} spacing={5}>
            <Typography className={classes.title} variant="h3">
              {content.jobPosition}
            </Typography>
            <Typography color="textPrimary" variant="subtitle1">
              {content.jobType} / {content.jobLocation}
            </Typography>
            <Typography color="textPrimary" variant="subtitle1">
              {content.shift} / {content.schedule}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box my={1}>
        <Grid container style={{ backgroundColor: "lightgray" }}>
          <Typography style={{ padding: 0.7 }}></Typography>
        </Grid>
      </Box>

      <Grid
        container
        direction={matchesSM ? "column" : "row"}
        justify="space-between"
        data-aos="fade-up"
      >
        <Grid item sm={12} md={7}>
          <Box my={2}>
            <Typography className={classes.title} variant="h4">
              {content.firstTextBlockTitle}
            </Typography>{" "}
            {content.textBlock.map((text, i) => (
              <Box key={i} pb={2}>
                <Typography color="textPrimary" variant="body1">
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box my={4}>
            <Typography className={classes.title} variant="h4">
              {content.secondTextBlockTitle}
            </Typography>{" "}
            <Box pl={4}>
              <ul style={{ listStyle: "initial" }}>
                {content.skills.map((skill) => (
                  <li key={skill}>
                    <Typography color="textPrimary" variant="body1">
                      {skill}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Box my={2}>
            <Typography className={classes.title} variant="h4">
              {content.thirdTextBlockTitle}
            </Typography>{" "}
            <Box pl={4}>
              <ul style={{ listStyle: "initial" }}>
                {content.responsabilities.map((skill) => (
                  <li>
                    <Typography color="textPrimary" variant="body1">
                      {skill}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Box my={2}>
            <Typography className={classes.title} variant="h4">
              {content.fourthTextBlockTitle}
            </Typography>{" "}
            <Box pl={4}>
              <ul style={{ listStyle: "initial" }}>
                {content.qualifications.map((skill) => (
                  <li>
                    <Typography color="textPrimary" variant="body1">
                      {skill}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>

          <Box my={2}>
            <Typography className={classes.title} variant="h4">
              {content.fifthTextBlockTitle}
            </Typography>{" "}
            <Box pl={4}>
              <ul style={{ listStyle: "initial" }}>
                {content.benefits.map((skill) => (
                  <li>
                    <Typography color="textPrimary" variant="body1">
                      {skill}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Grid>

        <Grid item sm={12} md={4}>
          <Box my={2}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography
                  style={{ color: "#FFFFFF" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  {basicContent.firstCard.title}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#F7F7F7" }}>
                  {basicContent.firstCard.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  className={classes.button}
                  disableRipple
                  disableFocusRipple
                  color="primary"
                  variant="outlined"
                  href="/about"
                >
                  {basicContent.firstCard.button}
                </Button>
              </CardActions>
            </Card>
          </Box>

          <Box>
            <Card className={classes.cardRoot2}>
              <CardContent className={classes.cardContentRoot}>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                  color="textPrimary"
                >
                  {basicContent.secondCard.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {basicContent.secondCard.text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  className={classes.button}
                  disableRipple
                  disableFocusRipple
                  color="primary"
                  variant="contained"
                  href="/career"
                >
                  {basicContent.secondCard.button}
                </Button>
              </CardActions>
            </Card>
          </Box>
          {/* <Box mt={2}>
            <Card className={classes.cardRoot}>
              <CardContent>
                <Typography
                  style={{ color: "#FFFFFF" }}
                  gutterBottom
                  variant="h6"
                  component="h6"
                >
                  {content.sixthTextBlockTitle}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#F7F7F7" }}>
                  {content.sixthTextBlock}
                </Typography>
              </CardContent>
            </Card>
          </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndividualJob;
