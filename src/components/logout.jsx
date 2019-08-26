import React from 'react';
import { Redirect } from 'react-router-dom';
import { setUser } from './service/user'
const Logout = () => {
    setUser();
    return <Redirect to="/login" />
}

export default Logout;