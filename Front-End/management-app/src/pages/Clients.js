import React, { Component } from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { AddClient } from "./modals/AddClient";
import "./css/Clients.css";
import { EditClient } from "./modals/EditClient";
import {ConfirmAlert} from "./modals/ConfirmAlert";


export class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {client:[], addModalShow: false, editModalShow: false,  successModalShow: false,failModalShow: false,confirmModalShow: false,alertMessage:null };
  }

  refreshList(){
    fetch('http://localhost:5000/api/client')
    .then(response=>response.json())
    .then(data=>{
      this.setState({client:data});
    });

  }

  componentDidMount(){
    this.refreshList();
}

componentDidUpdate(){
    this.refreshList();
}

deleteCli(id){
  this.setState({ confirmModalShow: false });
  
  fetch('http://localhost:5000/api/client/'+id,{
    method:'DELETE',
    headers:{'Accept':'applicaton/json', 'Content-Type':'applicaton/json'}
  }).then(res=>res.json())
  .then((result)=>{
    this.setState({ alertMessage: 'Deleted Successfully!', successModalShow: true });
  },
  (error)=>{
    this.setState({ alertMessage: 'Delete Failed!', failModalShow: true });
  })

}


  render() {

    let confirmModalClose = () => this.setState({ confirmModalShow: false });

    const {client, cliId,cliName,cliEmail,cliAddress,cliCity,cliPhone}=this.state;
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
              <th>ClientPhone</th>
              <th style={{ width: 250 }}>Options</th>
            </tr>
          </thead>

          <tbody>
            {client.map(cli=>
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
                    cliId:cli.cli_id, cliName:cli.cli_name, cliEmail:cli.cli_email,
                    cliAddress:cli.cli_address,cliCity:cli.cli_city,cliPhone:cli.cli_phone})}>
                    Edit
                  </Button>
                  <Button
                    style={{ width: 80 }}
                    variant="danger"
                    onClick={()=>this.setState({alertMessage: 'Are you sure?', confirmModalShow:true, cliId:cli.cli_id})}
                  >
                    Delete
                  </Button>

                </ButtonToolbar>
                <EditClient
                  show={this.state.editModalShow}
                  onHide={editModalClose}
                  cliId={cliId}
                  cliName={cliName}
                  cliEmail={cliEmail}
                  cliAddress={cliAddress}
                  cliCity={cliCity}
                  cliPhone={cliPhone}
                />
              </td>
            </tr>)}

          </tbody>
          <ButtonToolbar className="add-button">
          <Button
            style={{background:'#035bad'}}
            onClick={() => this.setState({ addModalShow: true })}
          >Add Client
          </Button>
          <AddClient
            show={this.state.addModalShow}
            onHide={addModalClose}/>
        </ButtonToolbar>
        </Table>
                    
        <ConfirmAlert
            show={this.state.confirmModalShow}
            onHide={confirmModalClose}
            message={this.state.alertMessage}
            onClickYes={()=>this.deleteCli(this.state.cliId)}
          /> 

      </div>

                      

    );
  }
}

export default Clients;
