import React, {useState} from 'react';
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

const LoginForm = (props:{answers:any, index:any, setIndex:any, setAnswers:any}) => {

    const classes = useStyles();
    const [loginField, setLoginField] = useState('');
    const [numberField, setNumberField] = useState('');

    const submitHandler = () => {
      //@ts-ignore
      props.setAnswers([...props.answers, {login:loginField, number:numberField}])
      props.setIndex(props.index + 1)
    } 

    return(

    <Container component="main" maxWidth="xs">
    <CssBaseline />

    <div className={classes.paper}>
      <Typography style={{textAlign:'center'}} component="h1" variant="h4">
      Введите свой логин и номер телефона:
      </Typography>
      <TextField style={{padding:'10px'}} value={loginField} onChangeCapture={(e:any)=> setLoginField(e.target.value)} id="filled-basic" label="Login" variant="outlined" multiline />
      <TextField style={{padding:'10px'}} value={numberField} onChangeCapture={(e:any)=> setNumberField(e.target.value)} id="filled-basic" label="Phone number" variant="outlined" multiline />
      <Button onClick={submitHandler} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </div>
      </Container>
    )
}

export default LoginForm;