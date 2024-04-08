import React from 'react';
import UserForm from './userForm'; 
import UsersTable from './usersTable'; 
import { Box } from '@mui/material'; // Import Box component

const Users=[
    {
        id:1,
        name:'sachi',
    },

    {
        id:2,
        name:'eepsa',
    }
]

const users = () =>{
    return(
        <Box>
            <UserForm/>
            <UsersTable rows={users}/>
        </Box>
        
    );

}

export default users;