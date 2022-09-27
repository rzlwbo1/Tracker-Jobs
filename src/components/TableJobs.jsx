import React from 'react'
import Table from 'react-bootstrap/Table';
import Status from './Status'


function StripedRowExample({jobDatas}) {
  return (
    <Table striped responsive="md">
      <thead>
        <tr>
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
              <tr>
                <td>{index +1}</td>
                <td>{jb.date}</td>
                <td>{jb.role}</td>
                <td>{jb.company}</td>
                <td>
                  <Status />
                </td>
                <td>Aksi</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  );
}

export default StripedRowExample;