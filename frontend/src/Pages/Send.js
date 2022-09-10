import React, { Component } from "react";
import data from "../assets/data.json";
import { useParams, Link } from "react-router-dom";
import SendMessage from "../Components/Forms/SendMessage";
import { Container } from "reactstrap";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Send extends Component {
  state = {
    item: {},
  };

  getItem(id) {
    data.map((row) => {
      if (row.id == id) {
        this.setState({ item: row });
      }
    });
  }

  componentDidMount() {
    this.getItem(this.props.params.id);
  }
  render() {
    const { item } = this.state;
    return (
      <Container className="App">
        <SendMessage item={item}/>
      </Container>
    );
  }
}

export default withParams(Send);
