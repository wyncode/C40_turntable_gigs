import React, { Component } from 'react';
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
  setQuickButtons
} from 'react-chat-widget';
import { useHistory } from 'react-router-dom';
import 'react-chat-widget/lib/styles.css';

const buttons = [
  { label: 'Apply for a Gig', value: '1' },
  { label: 'Become a Featured Artist', value: '2' }
];

export class Chat extends Component {
  componentDidMount() {
    addResponseMessage(
      'Hi! We would love to book for our next Gig! Whens a good time talk?😃'
    );
    setQuickButtons(buttons);
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  handleQuickButtonClicked = (data) => {
    setQuickButtons(buttons.filter((button) => button.value !== data));
    console.log(data);
    if (data === 1) {
    }
  };
  history = useHistory();
  render() {
    return (
      <div className="book-me-button">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          // profileAvatar={'text'}
          title="Club Diamond"
          subtitle="Apply to one of our gigs today!!!"
        />
      </div>
    );
  }
}

export default Chat;
