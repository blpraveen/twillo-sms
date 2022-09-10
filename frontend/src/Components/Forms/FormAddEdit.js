import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import data from "../../assets/data.json";
import * as fs from 'fs';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first_name: "",
    last_name: "",
    phone: ""
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitFormAdd = (e) => {
    e.preventDefault();
    data[data.length] = {
        id:data.length+1,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone: this.state.phone
      }
    fs.writeFile('../../assets/data.json', JSON.stringify(data), (err) => {
        if (err) console.log('Error writing file:', err);
    })
    
    
  };

  submitFormEdit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/crud", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone: this.state.phone
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0]);
          this.props.toggle();
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, first_name, last_name,  phone } =
        this.props.item;
      this.setState({ id, first_name, last_name, phone });
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}
      >
        <FormGroup>
          <Label for="first"> First Name </Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            onChange={this.onChange}
            value={this.state.first === null ? "" : this.state.first}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last"> Last Name </Label>
          <Input
            type="text"
            name="last_name"
            id="last_name"
            onChange={this.onChange}
            value={this.state.last === null ? "" : this.state.last}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone"> Phone </Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            onChange={this.onChange}
            value={this.state.phone === null ? "" : this.state.phone}
            placeholder="ex. 555-555-5555"
          />
        </FormGroup>
        <Button> Submit </Button>
      </Form>
    );
  }
}

export default AddEditForm;
