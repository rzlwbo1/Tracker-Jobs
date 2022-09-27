import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Status({ status, onUpdateStatus, id }) {
  if (status == "accepted") {
    return (
      <DropdownButton
        id="dropdown-item-button"
        title={status.charAt(0).toUpperCase() + status.slice(1)}
        variant="success"
        size={"sm"}
        style={{ textTransform: "capitalize" }}
      >
        {[
          "accepted",
          "applied",
          "rejected",
          "test",
          "ghosting",
          "interview",
        ].map((stat, index) => (
          <Dropdown.Item
            active={stat == status ? true : ""}
            onClick={(ev) => onUpdateStatus(id, ev)}
            key={index}
          >
            {stat}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  } else if (status == "rejected") {
    return (
      <DropdownButton
        id="dropdown-item-button"
        title={status.charAt(0).toUpperCase() + status.slice(1)}
        variant="danger"
        size={"sm"}
        style={{ textTransform: "capitalize" }}
      >
        {[
          "accepted",
          "applied",
          "rejected",
          "test",
          "ghosting",
          "interview",
        ].map((stat, index) => (
          <Dropdown.Item
            active={stat == status ? true : ""}
            onClick={(ev) => onUpdateStatus(id, ev)}
            key={index}
          >
            {stat}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }
}

export default Status;
