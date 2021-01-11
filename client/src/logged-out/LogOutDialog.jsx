import React from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';

function LogOut() {
  const handleLogOut = () => {
    try {
      axios.post('api/lougout');
    } catch (e) {
      console.log(e);
    }
  };
  return <Button onClick={handleLogOut}>Log out</Button>;
}

export default LogOut;
