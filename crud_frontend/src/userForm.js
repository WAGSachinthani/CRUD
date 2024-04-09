import React from 'react';
import { Grid, Typography } from '@mui/material'; // Import Typography component from Material-UI
import {useState} from "react";


const UserForm = props => {

    const[id,setId]=useState('')
    const[emailAddress,setEmail]=useState('')
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')

  

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '60px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>

            {/* User ID Field */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '150px',
                        display: 'block',
                    }}
                >
                    User ID
                </Typography>
                <input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            {/* Email Address Field */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="email"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '150px',
                        display: 'block',
                    }}
                >
                    Email Address
                </Typography>
                <input
                    type="text"
                    id="email"
                    name="email"
                    sx={{ width: '400px' }}
                    value={emailAddress}
                    onChange={e => setEmail(e.target.value)}
                />
            </Grid>

            {/* User First Name Field */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="name"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '150px',
                        display: 'block',
                    }}
                >
                    User First Name
                </Typography>
                <input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </Grid>

            {/* User Last Name Field */}
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography
                    component={'label'}
                    htmlFor="lname"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '150px',
                        display: 'block',
                    }}
                >
                    User Last Name
                </Typography>
                <input
                    type="text"
                    id="lname"
                    name="lname"
                    sx={{ width: '400px' }}
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </Grid>

            {/* Submit Button */}
            <button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6c6',
                    color: '#ffffff',
                    marginLeft: '25px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6c6',
                    }

                }}
            >
                ADD
            </button>
        </Grid>
    );
}

export default UserForm;
