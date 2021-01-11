import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

function LogOut() {
  const { setCurrentUser } = useContext(AppContext);
  const handleLogOut = () => {
    console.log('hello');
    try {
      // axios.post('/api/users/lougout');
      setCurrentUser(null);
    } catch (e) {
      console.log(e);
    }
  };
  return <Button onClick={() => handleLogOut()}>Log out</Button>;
}

export default LogOut;
