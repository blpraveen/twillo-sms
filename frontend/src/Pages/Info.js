import React, { Component } from "react";
import data from "../assets/data.json";
import { useParams, Link } from "react-router-dom";
import { Table, Container } from "reactstrap";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Info extends Component {
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
        <Table responsive hover>
        <thead>
            <tr>
              
              <th> Name </th> <th> Value </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Contact Name </td>
              <td> {item ? item.first_name + " " + item.last_name : ""} </td>
            </tr>
            <tr>
              <td> Contact Number </td> <td> {item ? item.phone : ""} </td>
            </tr>
          </tbody>
        </Table>
        <Link to={`/send/${item.id}`} className="btn btn-info">
          
          Send Message
        </Link>
      </Container>
    );
  }
}

export default withParams(Info);
