import React from 'react';
import { Grid, Typography } from '@mui/material'; // Import Typography component from Material-UI

const UserForm = props => {
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
                    value={''}
                    onChange={e => { }}
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
                    value={''}
                    onChange={e => { }}
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
                    value={''}
                    onChange={e => { }}
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
                    value={''}
                    onChange={e => { }}
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
