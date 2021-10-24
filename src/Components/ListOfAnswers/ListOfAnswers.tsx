import React, {useEffect, useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'

import RadioList from "./RadioList";

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

export default function ListOfAnswers(props:{text:string, options:Array<string>, setIndex:any, index:number, answers:any, isLast:boolean, lastQuestionHandler:any, setAnswers:any, id:number, time:number}) {
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        

      <div className={classes.paper}>
        <Typography onMouseDown={(e:any) => {e.preventDefault(); return false}} component="h1" variant="h4">
          {props.text}
        </Typography>
        <form className={classes.form} noValidate>
          <RadioList id={props.id} setAnswers={props.setAnswers} lastQuestionHandler={props.lastQuestionHandler} isLast={props.isLast} answers={props.answers} options={props.options} index={props.index} setIndex={props.setIndex}/>
        </form>
      </div>
    </Container>
  );
}
