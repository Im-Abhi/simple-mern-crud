import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

import FormUser from '../FormUser/FormUser';

const ModalUser = (props) => {
  return (
    <Modal
      trigger={<Button color={props.buttonColor}>{props.buttonTriggerTitle}</Button>}
      dimmer='inverted'
      size='tiny'
      closeIcon='close'
    >
      <Modal.Header>{props.headerTitle}</Modal.Header>
      <Modal.Content>
        <FormUser
          buttonSubmitTitle={props.buttonSubmitTitle}
          buttonColor={props.buttonColor}
          userID={props.userID}
          onUserAdded={props.onUserAdded}
          onUserUpdated={props.onUserUpdated}
          server={props.server}
        />
      </Modal.Content>
    </Modal>
  );
}

export default ModalUser;
