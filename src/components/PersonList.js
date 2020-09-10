import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedPerson } from "../actions";

class PersonList extends Component {
  renderList() {
    return this.props.persons.map((person) => {
      return (
        <div className="item" key={person.name}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectedPerson(person)}
            >
              Select
            </button>
          </div>
          <div className="content">{person.name}</div>
        </div>
      );
    });
  }
  render() {
    //console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return { persons: state.persons };
};

export default connect(mapStateToProps, { selectedPerson })(PersonList);
