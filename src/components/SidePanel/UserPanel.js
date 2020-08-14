import React from 'react';
import firebase from '../../firebase';
import { Button, Grid, Header, Icon, Dropdown, Image, Input, Modal } from 'semantic-ui-react';

class UserPanel extends React.Component {

    state = {
        imagePreview: '',
        user: this.props.currentUser,
        modal: false
    }

    openModal = () => this.setState({ modal:true });
    closeModal = () => this.setState({ modal: false });

    dropDownOptions = () => [
        {
            key: "user",
            text: <span>Signed in as <strong>{this.state.user.displayName}</strong></span>,
            disabled: true
        },
        {
            key: "avatar",
            text: <span onClick={this.openModal}>Change Avatar</span>
        },
        {
            key: "signout",
            text: <span onClick={this.handleSignout}>Sign Out</span>
        }
    ];

    handleChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                this.setState({ previewImage: reader.result });
            });
        }
    }

    handleSignout = () => {
        firebase    
            .auth()
            .signOut()
            .then(() => console.log('signed out!'))
    }

    render() {
        const { user, modal } = this.state;
        const { primaryColor } = this.props;

        return (
            <Grid style={{ background: primaryColor }}>
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
                        {/* APP header */}
                        <Header inverted floated="left" as="h2">
                            <Icon name="code" />
                            <Header.Content>Let's Trade</Header.Content>
                        </Header>
                        {/* Dropdown */}
                        <Header style={{ padding: '0.25em' }} as="h4" inverted>
                            <Dropdown trigger={
                                <span>
                                    <Image src={user.photoURL} spaced="right" avatar />
                                    {user.displayName}
                                </span>} 
                                options={this.dropDownOptions()} 
                            />
                    </Header>
                    </Grid.Row>

                    {/* Change user avatar modal */}
                    <Modal basic open={modal} onClose={this.closeModal}>
                      <Modal.Header>Change Avatar</Modal.Header>
                      <Modal.Content>
                          <Input
                            onChange={this.handleChange}
                            fluid
                            type='file'
                            label='New Avatar'
                            name='previewImage'
                          />
                          <Grid centered stackable columns={2}>
                              <Grid.Row centered>
                                  <Grid.Column className='ui center aligned grid'>
                                      {/* Image Preview */}
                                  </Grid.Column>
                                  <Grid.Column>
                                      cropped Image Preview
                                  </Grid.Column>
                              </Grid.Row>
                          </Grid>
                      </Modal.Content>
                      <Modal.Actions>
                          <Button color='green' inverted>
                              <Icon name='save' /> Change Avatar 
                          </Button>
                          <Button color='green' inverted>
                              <Icon name='image' /> Preview
                          </Button>
                          <Button color='red' inverted onClick={this.closeModal}>
                              <Icon name='save' /> Cancel
                          </Button>
                      </Modal.Actions>
                    </Modal>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel;
