import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'

export default function InputTextField(props:{setIndex:any, index:number, answers:any, isLast:any}) {

    const [value, setValue] = useState('');

    const buttonClickHandler = () => {
        props.setIndex(props.index + 1);
        props.answers.push({"type":"textQuestion", "text":value})
    }

    const lastQuestionHandler = () => {
        alert('Все!')
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '96%', height:'100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={value} onChange={(e:any) => setValue(e.target.value)} id="filled-basic" label="Filled" variant="filled" multiline />
      <Button onClick={props.isLast ? lastQuestionHandler : buttonClickHandler} variant="contained" endIcon={<SendIcon />}>
        {props.isLast ? "Закончить опрос" : "Далее"}
    </Button>
    </Box>
  );
}