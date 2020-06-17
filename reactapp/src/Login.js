import React, {Component} from "react";

export default class Login extends Component {
    render() {
      return(
         <div className="login">
            <h1>SignIn</h1>
            Username : <input type="text" /> <br/><br/>
            Password : <input type="password"/><br/><br/>
            <input type="button" value="submit"/>

         </div>
      );
    }
}