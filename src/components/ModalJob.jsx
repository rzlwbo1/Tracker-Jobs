import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalJob({ show, handleClose, editJob }) {

  function handleSubmitEdit(e) {
    console.log()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing Jobs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmitEdit}>
            <div className="mb-3">
              <label className="form-label">Date Applied</label>
              <input
                type="date"
                name="date"
                className="form-control"
                defaultValue={editJob.date}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <input
                type="text"
                name="role"
                className="form-control"
                defaultValue={editJob.role}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                type="text"
                name="company"
                className="form-control"
                defaultValue={editJob.company}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-select" aria-label="Default select example" defaultValue={editJob.status}>
                <option value="accepted">accepted</option>
                <option value="applied">applied</option>
                <option value="rejected">rejected</option>
                <option value="test">test</option>
                <option value="ghosting">ghosting</option>
                <option value="interview">interview</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
