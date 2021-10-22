import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import InputTextField from '../UI/InputTextField';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.paper
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(4)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

const DefaultTextQuestion = () => {

    const classes = useStyles();

    return(
        <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Qual foi o seu primeiro bixo de estimação?
        </Typography>
        <form className={classes.form} noValidate>
          <InputTextField />
        </form>
      </div>
    </Container>
    )
}

export default DefaultTextQuestion