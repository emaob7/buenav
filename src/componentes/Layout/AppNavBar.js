import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import BarSession from "./Bar/BarSession";

export default class AppNavBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" >
          <BarSession/>
        </AppBar>
      </div>
    );
  }
}
