import React from "react";
import dynamic from "next/dynamic";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(
    //@ts-ignore
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.paper
    },
    form: {
      width: "100%", // Fix IE 11 issue.
    //   marginTop: theme.spacing(4)
    },
    submit: {
    //   margin: theme.spacing(3, 0, 2)
    }
  }));

function TextFieldWitHhighlighting() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

    const classes = useStyles();

  return (
    <Container component="main" >
    <CssBaseline />

    <div className={classes.paper}>
      <Typography component="h1" variant="h4">
        Qual foi o seu primeiro bixo de estimação?
      </Typography>
      <form className={classes.form} noValidate>
      <CodeEditor
      //@ts-ignore
        value={code}
        language="javascript"
        placeholder="Please enter JS code."
        onChange={(evn:any) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
        }}
      />      
      </form>
    </div>
    <Button variant="contained" endIcon={<SendIcon />}>
        Send
    </Button>
  </Container>
  );
}

export default TextFieldWitHhighlighting;