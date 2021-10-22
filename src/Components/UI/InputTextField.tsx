import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'

export default function InputTextField() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%', height:'100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Filled" variant="filled" multiline />
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
        </Button>
    </Box>
  );
}