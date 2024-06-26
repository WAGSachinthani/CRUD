import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, } from '@mui/material';

const UserTable = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>User ID</TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{row.id}</TableCell> {/* Fix the interpolation */}
                                <TableCell component='th' scope="row">{row.emailAddress}</TableCell> {/* Fix the interpolation */}
                                <TableCell component='th' scope="row">{row.firstName}</TableCell> {/* Fix the interpolation */}
                                <TableCell component='th' scope="row">{row.lastName}</TableCell> {/* Fix the interpolation */}
                                <TableCell>
                                    <Button sx={{ margin: '0px 10px' }} onClick={() => {}}>
                                        Update
                                    </Button>
                                    <Button sx={{ margin: '0px 10px' }} onClick={() => {}}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={4} align="center">No users found</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;
