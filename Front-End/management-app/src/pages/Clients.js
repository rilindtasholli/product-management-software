import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddClient } from "./AddClient";
import "./css/Clients.css";
import { EditClient } from "./EditClient";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {deps:[], addModalShow: false, editModalShow: false };
  }

  refreshList(){
    fetch("http://localhost:5000/api/clients")
    .then(response=>response.json())
    .then(data=>{
      this.setState({deps:data})
    });

  }

  componentDidMount(){
    this.refreshList();
}

componentDidUpdate(){
    this.refreshList();
}


  render() {
    const {deps}=this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="main-content-client">
        <Table className=" w-75 m-auto  font-weight-bold" striped  size="md">
          <thead
            style={{
              background: "#002e58",
              color: "white",
              fontWeight: "bold",
            
            }}
          >
            <tr>
              <th>ClientId</th>
              <th>ClientName</th>
              <th>ClientEmail</th>
              <th>ClientAddress</th>
              <th>ClientCity</th>
              <th>PhoneNumber</th>
              <th style={{ width: 250 }}>Options</th>
            </tr>
          </thead>

          <tbody>
            {deps.map(cli=>
            <tr key={cli.cli_id}>
              <td>{cli.cli_id}</td>
              <td>{cli.cli_name}</td>
              <td>{cli.cli_email}</td>
              <td>{cli.cli_address}</td>
              <td>{cli.cli_city}</td>
              <td>{cli.cli_phone}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    style={{ background: "#035bad", width: 60 }}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true,
                    cli_id:cli.cli_id, cli_name:cli.cli_name, cli_email:cli.cli_email,
                    cli_address:cli.cli_address, cli_city:cli.cli_city, cli_phone:cli.cli_phone  })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    onClick={()=>this.deleteCli(cli.cli_id)}
                  >
                    Delete
                  </Button>

                </ButtonToolbar>
                <EditClient
                  // show={this.state.editModalShow}
                  // onHide={editModalClose}
                  // cli_id={cli_id}
                  // cli_name={cli_name}
                  // cli_email={cli_email}
                  // cli_address={cli_address}
                  // cli_city={cli_city}
                  // cli_phone={cli_phone}
                  
                />
              </td>
            </tr>)}

            <tr>
              <td>2</td>
              <td>Rilind Tasholli</td>
              <td>RilindTasholli@gmail.com</td>
              <td>Adresa</td>
              <td>Lipjan</td>
              <td>044-222-222</td>
              <td>
              <ButtonToolbar>
                  <Button
                    style={{ background: "#035bad", width: 60}}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
                <EditClient
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Gresa Shala</td>
              <td>Gresashala@gmail.com</td>
              <td>Rruga...</td>
              <td>Prizren</td>
              <td>044-333-333</td>
              <td>
                {" "}
                <ButtonToolbar>
                  <Button
                    style={{ background: "#035bad", width: 60 }}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
                <EditClient
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                />
              </td>
            </tr>

            
            <tr>
              <td>4</td>
              <td>Ernise Sallahu</td>
              <td>Ernisesallahu@gmail.com</td>
              <td>Rruga</td>
              <td>Gjakove</td>
              <td>044-444-444</td>
              <td>
                {" "}
                <ButtonToolbar>
                  <Button
                    style={{ background: "#035bad", width: 60 }}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
                <EditClient
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                />
              </td>
            </tr>

            
            <tr>
              <td>5</td>
              <td>Blenda Molliqaj</td>
              <td>Blendamolliqaj@gmail.com</td>
              <td>Rruga</td>
              <td>Deçan</td>
              <td>044-555-555</td>
              <td>
                {" "}
                <ButtonToolbar>
                  <Button
                    style={{ background: "#035bad", width: 60 }}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
                <EditClient
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                />
              </td>
            </tr>

            
            <tr>
              <td>6</td>
              <td>Lani Zymberi</td>
              <td>Lanizymberi@gmail.com</td>
              <td>Rruga...</td>
              <td>Drenas</td>
              <td>044-666-666</td>
              <td>
                {" "}
                <ButtonToolbar>
                  <Button
                    style={{ background: "#035bad", width: 60 }}
                    className="mr-2"
                    onClick={() => this.setState({ editModalShow: true })}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    
                  >
                    Delete
                  </Button>
                </ButtonToolbar>
                <EditClient
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                />
              </td>
            </tr>
            

          </tbody>
          <ButtonToolbar className="add-button">
          <Button
            style={{background:'#035bad'}}
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Client
          </Button>
          <AddClient
            show={this.state.addModalShow}
            onHide={addModalClose}
          ></AddClient>
        </ButtonToolbar>
        </Table>

    
      </div>
    );
  }
}

export default Clients;
