import React, { Component } from "react";
import { Container, Row, Col,Table } from "reactstrap";
class Sent extends Component {
  state = {
    items: [],
  };

  getItems() {
    fetch('http://127.0.0.1:5000/messages')
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getItems();
  }
    render() {
      return (
        <Container className="App">
          <Row>
            <Col>
              <h1 style={{ margin: "20px 0" }}> SMS Contact </h1>
            </Col>
          </Row>
          <Row>
            <Col>
            <Table responsive hover>
              <thead><tr><th> ID </th> <th> To </th> <th> Message </th></tr></thead>
              <tbody> 
              { this.state.items.map((item) => {
               return ( <tr key={item.id}>
                  <th scope="row"> {item.id} </th>
                  <td> {item.to} </td>
                  <td> {item.message} </td> 
                </tr>
              );}) }
              
              </tbody>
            </Table>
            </Col>
          </Row>
          
        </Container>
      );
    }

}

export default Sent;
