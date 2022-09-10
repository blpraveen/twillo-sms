import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import ModalForm from "../Modals/Modal";

class DataTable extends Component {
  deleteItem = (id) => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      fetch("http://localhost:3000/crud", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      })
        .then((response) => response.json())
        .then((item) => {
          this.props.deleteItemFromState(id);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const items = this.props.items.map((item) => {
      return (
        <tr key={item.id}>
          <th scope="row"> {item.id} </th>
          <td> {item.first_name} </td>
          <td> {item.last_name} </td> <td> {item.phone} </td>
          <td>
            <div style={{ width: "110px" }}>
              <Link to={`/contact-info/${item.id}`} className="btn btn-info">
                Contact Info
              </Link>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <Table responsive hover>
        <thead><tr><th> ID </th> <th> First </th> <th> Last </th> <th> Phone </th><th> Actions </th></tr></thead>
        <tbody> {items} </tbody>
      </Table>
    );
  }
}

export default DataTable;
