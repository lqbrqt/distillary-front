import React, {useState} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send'

const styles = (theme:any) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    overflow: "auto",
    // maxHeight: 500,
    backgroundColor: theme.palette.background.paper
  }
});

const RadioList = (props:{options:Array<string>, index:number, setIndex:any, answers:any, isLast:boolean}) => {

    const [state, setState] = useState('');

    const handleToggle = (value:any) => () => {
        //@ts-ignore
        setState({ checked: value });
      };

      const buttonClickHandler = () => {
        props.setIndex(props.index + 1);
        props.answers.push({"type":"textQuestion", "text":state})
    }

    const lastQuestionHandler = () => {
        alert('Все!')
    }
    
    return(
        <div>
        <List>
          {props.options.map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
              onClick={handleToggle(value)}
            //   className={classes.listItem}
            >
              <FormControlLabel
                control={<Radio />}
                //@ts-ignore
                checked={state.checked === value}
                tabIndex={-1}
                // disableRipple
                label=''
              />
              <ListItemText
                primary={value}
              />
            </ListItem>
          ))}
        </List>
        <Button onClick={props.isLast ? lastQuestionHandler : buttonClickHandler} variant="contained" endIcon={<SendIcon />}>
            {props.isLast ? "Закончить опрос" : "Далее"}
        </Button>
      </div>
    )
}


export default RadioList;
