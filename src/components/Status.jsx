import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Status() {
  return (
    <DropdownButton id="dropdown-item-button" title="Applied" variant={'success'} size={"sm"}>
      <Dropdown.Item as="button" active>Applied</Dropdown.Item>
      <Dropdown.Item as="button">Rejected</Dropdown.Item>
      <Dropdown.Item as="button">Ghosting</Dropdown.Item>
      <Dropdown.Item as="button">Interview</Dropdown.Item>
      <Dropdown.Item as="button">Test</Dropdown.Item>
    </DropdownButton>
  )
}

export default Status