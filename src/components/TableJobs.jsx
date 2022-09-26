import React from 'react'
import Table from 'react-bootstrap/Table';

function StripedRowExample() {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>

        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;