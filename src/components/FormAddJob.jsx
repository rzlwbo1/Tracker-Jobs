import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FormAddJob({onAdd}) {

  const [date, setDate] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");


  function handleSubmit(ev) {

    // untuk memudahkan controller component dgn hooks, disarankan pake anon function  di onCgange pada elemen inputnya langsung

    ev.preventDefault();

    onAdd({date, role, company, status: "applied"})

    setDate("")
    setRole("")
    setCompany("")
  }

  return (
    <div className="form-add-job mx-auto border p-4 d-flex flex-column justify-content-center align-items-stretch mt-5 shadow" style={{borderRadius: 10}}>
      <h4 className="fw-bold align-self-start">Add Job</h4>
      <Form onSubmit={handleSubmit} >
        <Row>
          <Col sm="auto" className="mb-3 mb-sm-0" >
            <Form.Control type="date" placeholder="Date" name="date" onChange={(ev) => setDate(ev.target.value)} value={date} required/>
          </Col>

          <Col sm="auto" className="mb-3 mb-sm-0">
            <Form.Control type="text" placeholder="Role" name="role" onChange={(ev) => setRole(ev.target.value)} value={role} required/>
          </Col>

          <Col sm="auto" className="mb-3 mb-sm-0">
            <Form.Control type="text" placeholder="Company" name="company" onChange={(ev) => setCompany(ev.target.value)} value={company} required/>
          </Col>

          <Col md sm="auto" className="mb-3 mb-sm-0">
            <Button variant="success" className="w-100 fw-bold btn-save" type="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormAddJob;
