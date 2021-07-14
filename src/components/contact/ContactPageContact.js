import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Hidden, Snackbar, useMediaQuery } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  fullHeightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: 768,
    width: "100%",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  container: {
    borderBottom: "0.6px solid lightgray",
  },
  contactWrapper: {
    backgroundColor: theme.palette.common.white,
  },
  iconWrapper: {
    backgroundColor: theme.palette.secondary.light,
  },
  icon: {
    color: theme.palette.common.white,
  },
  TextField: {
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    color: [theme.palette.text.secondary],
    "&:hover": {
      textDecoration: "none",
      color: [theme.palette.primary.main],
    },
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your Name")
    .min(2, "Enter a valid name")
    .required("Name is required"),

  message: yup
    .string("Enter your Message")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Message is required"),
});

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleClose = (event, reason) => {
    setAlert({ message: "", backgroundColor: "", open: false });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .get("http://localhost:3003/api/email/contactBasic", {
          params: {
            email: values.email,
            name: values.name,
            message: values.message,
          },
        })
        .then((res) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Message sent successfully",
            backgroundColor: theme.palette.success.main,
          });
        })
        .catch((error) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Something went wrong, please try again later.",
            backgroundColor: theme.palette.warning.main,
          });
          console.error(error);
        });
    },
  });

  const content = {
    header: "Let's talk about the future",
    title2: "Contact details",
    description2:
      "Our contact details. We read all your questions carefully and answer them.",
    description:
      "We're here to answer your questions and be as helpful as possible.",
    terms: "I agree to the terms of use and privacy policy.",
    "primary-action": "Send Message",
    contact1: "Address",
    "contact1-desc1": "Suite 1610, Guinness Tower",
    "contact1-desc2": "1055 West Hastings Street",
    "contact1-desc3": "Vancouver, BC V6E 2E9 ",
    contact2: "Email",
    "contact2-desc": "plewis@lewisco.bc.ca",
    contact3: "Phone",
    "contact3-desc": "+1 604-664-0680",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Box
            pt={10}
            pb={6}
            display="flex"
            className={[classes.halfLg, classes.firstBox]}
          >
            <Container>
              <Box mb={4}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  component="h2"
                  gutterBottom={true}
                >
                  {content["header"]}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  paragraph={true}
                  className={classes.description}
                >
                  {content["description"]}
                </Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  className={classes.TextField}
                  variant="outlined"
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                  fullWidth
                  className={classes.TextField}
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  className={classes.TextField}
                  multiline
                  variant="outlined"
                  id="message"
                  name="message"
                  label="Message"
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  fullWidth
                />

                <Button
                  type="submit"
                  fullWidth
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  disableElevation
                  variant="raised"
                  color="primary"
                  variant="contained"
                >
                  {content["primary-action"]}
                </Button>
              </form>
            </Container>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </section>
  );
}
