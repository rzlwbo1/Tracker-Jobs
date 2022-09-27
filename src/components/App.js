import React, { useState } from "react";
import FormAddJob from "./FormAddJob";
import TableJobs from "./TableJobs";
import Container from "react-bootstrap/Container";
import Status from "./Status";

function App() {

  // accepted, applied, rejected, test, ghosting, interview
  const [jobs, setJobs] = useState([
    {
      id: 1,
      date: "2022-09-26",
      role: "Programmer",
      company: "Bowo Tech",
      status: "rejected"
    },
    {
      id: 2,
      date: "2022-09-29",
      role: "UI/UX",
      company: "Skilvul",
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

  function handleUpdateStatus(idJob, ev) {

    // get status by clicking dropdowns
    const getStatus = ev.target.textContent;

    const getDataById = jobs.find((jb) => jb.id == idJob);
    const filteredDataNotId = jobs.filter((jb) => jb.id != idJob)

    console.log(getDataById, getStatus, filteredDataNotId)

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
        <TableJobs jobDatas={jobs} onUpdateStatus={handleUpdateStatus}/>
      </Container>
    </div>
  );
}

export default App;
