import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Employee from './Employee';
import Login from './Login';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
     /* columnDefs: [{
        headerName: "Emp ID", field: "eid"
      }, {
        headerName: "Emp Name", field: "ename"
      }, {
        headerName: "Emp Designation", field: "edes"
      }],
       rowData: [{
        eid: 101, ename: "John", edes: "Developer" }, 
        { eid: 102, ename: "Maddy", edes: "Tester" }, 
        { eid: 103, ename: "Jack", edes: "Manager"
      }]*/
      eid: [101,102,103],
      ename: ["John",'Maddy','Jack'],
      edes: ['Developer','Manager','tester']
    };
  }

  render() {
    return (
      <div>
       {/*<Login/> 
        */}
        <h1>Employee Data</h1>
        <Employee eid={this.state.eid[0]} ename={this.state.ename[0]} edes={this.state.edes[0]} />
        <Employee eid={this.state.eid[1]} ename={this.state.ename[1]} edes={this.state.edes[1]} />
        <Employee eid={this.state.eid[2]} ename={this.state.ename[2]} edes={this.state.edes[2]} />
      </div>
         
      /*  <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '600px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
       */
    );
  }
}

render(<App />, document.getElementById('root'));
