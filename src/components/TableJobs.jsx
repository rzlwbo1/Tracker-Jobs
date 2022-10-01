import React from "react";
import Table from "react-bootstrap/Table";
import Status from "./Status";

function TableJobs({ jobDatas, onUpdateStatus, onDeleteJob, onEditJob }) {
  return (
    <Table striped responsive="md">
      <thead>
        <tr style={{ textAlign: "center" }}>
          <th>No</th>
          <th>Date Applied</th>
          <th>Role</th>
          <th>Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobDatas.map((jb, index) => {
          return (
            <tr key={jb.id} style={{ textAlign: "center" }}>
              <td>{index + 1}</td>
              <td>{jb.date}</td>
              <td>{jb.role}</td>
              <td>{jb.company}</td>
              <td>
                <Status
                  status={jb.status}
                  onUpdateStatus={onUpdateStatus}
                  id={jb.id}
                />
              </td>
              <td>
                <button
                  className="btn p-0 btn-delete me-1"
                  onClick={() => onDeleteJob(jb.id)}
                >
                  <i
                    className="bi bi-x-circle-fill"
                    style={{ fontSize: "1.3em", color: "crimson" }}
                  ></i>
                </button>
                |
                <button
                  className="btn p-0 btn-edit ms-1"
                  onClick={() => onEditJob(jb.id)}
                >
                  <i
                    className="bi bi-pencil-square"
                    style={{ fontSize: "1.3em", color: "darkorange" }}
                  ></i>
                  <i></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableJobs;
