import React from 'react';
import { Modal, Input, Button, Icon } from 'semantic-ui-react';

class FileModal extends React.Component {
  render() {
    const { modal, closeModal } = this.props;

    return (
      <Modal basic open={modal} onClose={closeModal}>
        <Modal.Header>Select an Image File</Modal.Header>
        <Modal.Content>
          <Input
            fluid
            label="File types: jpg, png"
            name="file"
            type="file"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            inverted
            color="green"
          >
            <Icon name="checkmark" /> Send
          </Button>
          <Button
            inverted
            color="red"
            onClick={closeModal}
          >
            <Icon name="remove" /> Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default FileModal;