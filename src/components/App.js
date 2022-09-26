import React, { useState } from "react";
import FormAddJob from "./FormAddJob";
import TableJobs from "./TableJobs";
import Container from "react-bootstrap/Container";

function App() {

  const [jobs, setJobs] = useState([
    {
      id: 1,
      date: "2022-09-26",
      role: "Programmer",
      company: "Bowo Tech",
      status: "accepted"
    },
  ]);

  function onAddJobs(data) {

    // destructure yg ada , dan masukin yang baru

    const newJob = {
      id: jobs.length + 1,
      ...data
    }

    setJobs([...jobs, newJob])

  }

  return (
    <div className="p-4">
      <h1 className="fw-bold text-center title-app">
        Tracker <span style={{ color: "#2FC851" }}>Jobs</span>
      </h1>

      <FormAddJob onAdd={onAddJobs} />

      <Container fluid className="px-4">
        <h2 className="fw-bold" style={{ marginTop: 80 }}>
          List <span style={{ color: "#2FC851" }}>My Jobs</span>
        </h2>
        <TableJobs jobDatas={jobs} />
      </Container>
    </div>
  );
}

export default App;
