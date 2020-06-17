import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Employee extends Component {
   render() {
     return(
        <div className="Emp">
          <p>{this.props.eid}  {this.props.ename} {this.props.edes}</p>
         
        </div>
     );
   }
}

Employee.propTypes = {
  eid: PropTypes.number,
  ename:PropTypes.string,
  edes:PropTypes.string
}