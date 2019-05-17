import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <h1>Confirm</h1>
          <ListItemText primary= {"FirstName"} secondary={values.firstName}/>
          <br/>
          <ListItemText  primary={"LastName"} secondary= {values.lastName}/>
          <br/>
         <ListItemText primary= {"Email"} secondary={values.email}/>
          <br/>
          <ListItemText  primary={"Occupation"} secondary={values.occupation}/>
          <br/>
          <ListItemText  primary={"City"} secondary= {values.city}/>
          <br/>
         <ListItemText primary={"Bio"} secondary={values.bio}/>
          <br/>
          <Button
            label="Continue"
            color="primary"
            style={styles.button}
            onClick={this.continue}
          >Continue</Button>
           <Button
            label="Back"
            color="primary"
            style={styles.button}
            onClick={this.back}
          >Back</Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Confirm;
