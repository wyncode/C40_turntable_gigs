import React, { Component, useEffect } from 'react';
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
  setQuickButtons
} from 'react-chat-widget';
import { useHistory } from 'react-router-dom';
import 'react-chat-widget/lib/styles.css';

const buttons = [{ label: 'Apply for a Gig', value: '1' }];
const Chat = () => {
  const { push } = useHistory();
  useEffect(() => {
    addResponseMessage(
      'Hi! We would love to book you for our next Gig! When is a good time talk?😃'
    );
    setQuickButtons(buttons);
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const handleQuickButtonClicked = (data) => {
    setQuickButtons(buttons.filter((button) => button.value !== data));
    if (data == 1) {
      push('/applygig');
    }
  };

  return (
    <div className="book-me-button">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleQuickButtonClicked}
        // profileAvatar={'text'}
        title="Dave the Venue Manager"
        subtitle="Apply to one of our gigs today!!!"
      />
    </div>
  );
};

export default Chat;
