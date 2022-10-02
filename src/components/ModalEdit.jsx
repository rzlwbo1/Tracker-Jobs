import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ModalEdit({ showModal, hideModal, dataEditJob }) {
  
  const [date, setDate] = useState(dataEditJob.date);
  const [role, setRole] = useState(dataEditJob.role);
  const [company, setCompany] = useState(dataEditJob.company);
  const [status, setStatus] = useState(dataEditJob.status);

  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
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
