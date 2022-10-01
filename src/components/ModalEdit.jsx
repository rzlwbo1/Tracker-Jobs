import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ModalEdit({ showModal, hideModal, date }) {

  // const {id, role, company, status} = dataEditJob;

  // console.log(id)

  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control type="date" name="date" value={date}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" name="role" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" name="company" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Change Status</option>
              <option value="applied">applied</option>
              <option value="accepted">accepted</option>
              <option value="rejected">rejected</option>
              <option value="test">test</option>
              <option value="ghosting">ghosting</option>
              <option value="interview">interview</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        <Button variant="primary" onClick={hideModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEdit;
