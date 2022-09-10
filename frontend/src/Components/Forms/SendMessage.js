import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class SendMessage extends React.Component {
  state = {
    to: "",
    message: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitFormSend = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/messages", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: this.state.to,
        message: this.state.message,
      }),
    })
      .then((response) => response.json())
      .then((item) => {
        if (item.message) {
          alert('SMS Sent');
        } else {
          console.log("failure");
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
        const { phone } =
        this.props.item;
        this.setState({ to:phone });
    }
  }
  componentDidMount() {
    // if item exists, populate the state with proper data
    console.log(this.props)
    if (this.props.item) {
      const { phone } =
        this.props.item;
      this.setState({ to:phone });
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.submitFormSend}
      >
        <FormGroup>
          <Label for="to"> To </Label>
          <Input
            type="text"
            name="to"
            id="to"
            onChange={this.onChange}
            value={this.state.to === null ? "" : this.state.to}
          />
        </FormGroup>
        <FormGroup>
          <Label for="message"> Message </Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            onChange={this.onChange}
            value={this.state.message === null ? "" : this.state.message}
          />
        </FormGroup>
        <Button> Submit </Button>
      </Form>
    );
  }
}

export default SendMessage;
