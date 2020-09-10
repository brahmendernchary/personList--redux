import React, { Component } from "react";
import PersonList from "./PersonList";
import PersonDetails from "./PersonDetails";

export default class App extends Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <PersonList />
          </div>
          <div className="column eight wide">
            <PersonDetails />
          </div>
        </div>
      </div>
    );
  }
}
