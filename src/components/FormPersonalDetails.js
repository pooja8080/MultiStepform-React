import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormPersonalDetails extends Component {
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
          <h1>Enter Personal Details</h1>
          <TextField
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
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

export default FormPersonalDetails;
