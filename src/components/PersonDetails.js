import React from "react";
import { connect } from "react-redux";

const PersonDetails = ({ person }) => {
  if (!person) {
    return <div>Select a Person</div>;
  }
  return (
    <div>
      <h3>Person Details</h3>
      <br />
      <p>
        Name:{person.name} <br />
        height:{person.height} <br />
        weight:{person.weight}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { person: state.selectedPerson };
};

export default connect(mapStateToProps)(PersonDetails);
