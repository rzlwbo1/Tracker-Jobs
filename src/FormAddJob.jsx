import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormAddJob() {
  return (
    <div className="form-add-job mx-auto w-75 border p-4 d-flex flex-column justify-content-center align-items-stretch mt-5 shadow" style={{borderRadius: 10}}>
      <h4 className="fw-bold align-self-start">Add Job</h4>
      <Form>
        <Row>
          <Col>
            <Form.Control type="date" placeholder="Date" />
          </Col>

          <Col>
            <Form.Control type="text" placeholder="Role" />
          </Col>

          <Col>
            <Form.Control type="text" placeholder="Company" />
          </Col>

          <Col>
            <Button variant="success" className="w-100 fw-bold">Save</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormAddJob;
