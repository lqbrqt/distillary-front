import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

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

const LoginForm = () => {

    const classes = useStyles();

    return(

    <Container component="main" maxWidth="xs">
    <CssBaseline />

    <div className={classes.paper}>
      <Typography component="h1" variant="h4">
      Введите свой логин и номер телефона:
      </Typography>
      <TextField id="filled-basic" label="Filled" variant="filled" multiline />
      <TextField id="filled-basic" label="Filled" variant="filled" multiline />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
        </Button>
      </div>
      </Container>
    )
}

export default LoginForm;