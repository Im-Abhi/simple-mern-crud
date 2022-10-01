import React from 'react';
import { Table } from 'semantic-ui-react';

import ModalUser from '../ModalUser/ModalUser';
import ModalConfirmDelete from '../ModalConfirmDelete/ModalConfirmDelete';

const TableUser = (props) => {
  let users = props.users;
  if (users) {
    users = users.map((user) =>
      <Table.Row key={user._id}>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <ModalUser
            headerTitle='Edit User'
            buttonTriggerTitle='Edit'
            buttonSubmitTitle='Save'
            buttonColor='blue'
            userID={user._id}
            onUserUpdated={props.onUserUpdated}
            server={props.server}
          />
          <ModalConfirmDelete
            headerTitle='Delete User'
            buttonTriggerTitle='Delete'
            buttonColor='black'
            user={user}
            onUserDeleted={props.onUserDeleted}
            server={props.server}
          />
        </Table.Cell>
      </Table.Row>
    );
    users = [...users].reverse();
  }

  // Make every new user appear on top of the list

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {users && <Table.Body>{users}</Table.Body>}
    </Table>
  );
}

export default TableUser;
