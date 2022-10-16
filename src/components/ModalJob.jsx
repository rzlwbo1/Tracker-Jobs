import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ModalJob extends React.Component {

  constructor(props) {
    super(props);

    
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this)
    this.dateInput = React.createRef() 
    this.roleInput = React.createRef() 
    this.companyInput = React.createRef() 
    this.statusInput = React.createRef() 
  }

  handleSubmitEdit(ev) {
    ev.preventDefault();

    // console.log(this.dateInput.current.value);
  }
  

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editing Jobs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmitEdit}>
              <div className="mb-3">
                <label className="form-label">Date Applied</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  id="editDate"
                  defaultValue={this.props.editJob.date}
                  ref={this.dateInput}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Role</label>
                <input
                  type="text"
                  name="role"
                  className="form-control"
                  defaultValue={this.props.editJob.role}
                  ref={this.roleInput}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  className="form-control"
                  defaultValue={this.props.editJob.company}
                  ref={this.companyInput}
                />
              </div>
  
              <div className="mb-3">
                <label className="form-label">Status</label>
                <select className="form-select" aria-label="Default select example" defaultValue={this.props.editJob.status} ref={this.statusInput}>
                  <option value="accepted">accepted</option>
                  <option value="applied">applied</option>
                  <option value="rejected">rejected</option>
                  <option value="test">test</option>
                  <option value="ghosting">ghosting</option>
                  <option value="interview">interview</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" onClick={this.props.handleClose}>Save</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalJob;
