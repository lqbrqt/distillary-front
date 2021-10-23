import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
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

const ResultCard = (props:{countOfRightAnswers:any}) => {
    const classes = useStyles();

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography onMouseDown={(e:any) => {e.preventDefault(); return false}} component="h1" variant="h4">
                    Количество правильных ответов: {props.countOfRightAnswers}
                </Typography>
            </div>
        </Container>
    )
}

export default ResultCard;