import React from "react";
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

class RadioList extends React.Component {
  state = {
    checked: 0
  };

  handleToggle = (value:any) => () => {
    this.setState({ checked: value });
  };

  render() {
    // const { classes } = this.props;

    return (
      <div>
        <List>
          {[0, 1, 2, 3, 4].map(value => (
            <ListItem
              key={value}
              role={undefined}
              button
              onClick={this.handleToggle(value)}
            //   className={classes.listItem}
            >
              <FormControlLabel
                control={<Radio />}
                checked={this.state.checked === value}
                tabIndex={-1}
                // disableRipple
                label=''
              />
              <ListItemText
                primary={`This a a multiline answers, please work please please`}
              />
            </ListItem>
          ))}
        </List>
        <Button variant="contained" endIcon={<SendIcon />}>
            Send
        </Button>
      </div>
    );
  }
}

// RadioList.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(RadioList);
