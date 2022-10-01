import React, { useState } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import axios from 'axios';

// 148833
const ModalConfirmDelete = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = e => setModalOpen(true);
  const handleClose = e => setModalOpen(false);

  const handleSubmit = (e) => {

    let params = e.target.getAttribute('data-userid');

    axios({
      method: 'delete',
      responseType: 'json',
      url: `${props.server}/api/users/${params}`,
    }).then((response) => {
      handleClose();
      props.onUserDeleted(response.data.result);
    })
      .catch((err) => {
        handleClose();
        throw err;
      });
  }

  return (
    <Modal
      trigger={<Button onClick={handleOpen} color={props.buttonColor}>{props.buttonTriggerTitle}</Button>}
      open={modalOpen}
      onClose={handleClose}
      dimmer='inverted'
      size='tiny'
    >
      <Modal.Header>{props.headerTitle}</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete <strong>{props.user.name}</strong>?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={handleSubmit} data-userid={props.user._id} color='red'>Yes</Button>
        <Button onClick={handleClose} color='black'>No</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalConfirmDelete;
