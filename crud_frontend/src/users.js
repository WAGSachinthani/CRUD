import React from 'react';
import UserForm from './userForm';
import UsersTable from './usersTable';
import { Box } from '@mui/material'; // Import Box component

const Users = [
    {
        id: 1,
        emailAddress: 'sachi123@example.com', // Include email address
        firstName: 'sachi',
        lastName: 'sachi',
    },
    {
        id: 2,
        emailAddress: 'eep123@example.com', // Include email address
        firstName: 'eepsa',
        lastName: 'udyami',
    }
];


const UsersPage = () => {
    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <UserForm />
            <UsersTable rows={Users} /> {/* Pass Users array as rows prop */}
            

        </Box>
    );
}

export default UsersPage;
