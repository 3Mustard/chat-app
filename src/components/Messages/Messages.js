import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import firebase from '../../firebase';

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Channels from "../SidePanel/Channels";

class Messages extends React.Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    channel: this.props.currentChannel,
    user: this.props.currentUser
  }

  render() {
    const { messagesRef, channel, user } = this.state;

    return (
      <React.Fragment>
        <MessagesHeader />

        <Segment className="messages"> 
          <Comment.Group >{/* Messages, the className of the segment might need to be in this group instead */}</Comment.Group>
        </Segment>

        <MessageForm 
          messagesRef={messagesRef}
          currentChannel={channel}
          currentUser={user}
        />
      </React.Fragment>
    );
  }
}

export default Messages;
