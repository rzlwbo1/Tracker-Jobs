import React from 'react'
import Table from 'react-bootstrap/Table';
import Status from './Status'


function TableJobs({jobDatas, onUpdateStatus, onDeleteJob}) {
  return (
    <Table striped responsive="md">
      <thead>
        <tr style={{textAlign: 'center'}}>
          <th>No</th>
          <th>Date Applied</th>
          <th>Role</th>
          <th>Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          jobDatas.map((jb, index) => {
            return (
              <tr key={jb.id} style={{textAlign: 'center'}}>
                <td>{index +1}</td>
                <td>{jb.date}</td>
                <td>{jb.role}</td>
                <td>{jb.company}</td>
                <td>
                  <Status status={jb.status} onUpdateStatus={onUpdateStatus} id={jb.id} />
                </td>
                <td>
                  <button className='btn p-0'><i className='bi bi-x-circle-fill' style={{fontSize: "1.3em", color: 'crimson'}} onClick={() => onDeleteJob(jb.id)} ></i></button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}

export default TableJobs;