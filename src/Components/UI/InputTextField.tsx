import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'
import { API_URI } from '../../config';

export default function InputTextField(props:{timer:number,id:number, setIndex:any, index:number, answers:any, isLast:any, lastQuestionHandler:any, setAnswers:any, time: number}) {

    const [value, setValue] = useState('');

    console.log(props.time, 'SDASD')
    

    const buttonClickHandler = () => {
        props.setIndex(props.index + 1);
        props.setAnswers([...props.answers, {"type":"textQuestion", "text":value, id:props.id}])
        setTimeout(console.log, 1000, props.answers)
    }
    if(props.timer === 0){
      buttonClickHandler()
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
      <Button onClick={props.isLast ? (() => props.lastQuestionHandler({"type":"textQuestion", "text": value, id:props.id})) : buttonClickHandler} variant="contained" endIcon={<SendIcon />}>
        {props.isLast ? "Закончить опрос" : "Далее"}
    </Button>
    </Box>
  );
}