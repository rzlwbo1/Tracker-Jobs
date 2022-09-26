import React from "react";
import FormAddJob from "./FormAddJob";
import TableJobs from "./TableJobs";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="p-4">
      <h1 className="fw-bold text-center title-app">
        Tracker <span style={{ color: "#2FC851" }}>Jobs</span>
      </h1>

      <FormAddJob />

      <Container fluid className="px-4">
        <h2 className="fw-bold" style={{ marginTop: 80 }}>
          List <span style={{ color: "#2FC851" }}>My Jobs</span>
        </h2>
        <TableJobs />
      </Container>
    </div>
  );
}

export default App;
