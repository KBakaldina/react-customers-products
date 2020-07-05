import React from 'react';
import Table from '@material-ui/core/Table';
import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function createCustomer(id, name, address, phone) {
    return { id, name, address, phone };
}

const customers = [
    createCustomer(1, 'Mark Benson', '365 Rochester St, Rialto FL 43250', '555-534-2342'),
    createCustomer(2, 'Bob Smith', '251 Market St, Nashville CA 94325', '555-534-2342'),
    createCustomer(3, 'John Draper', '890 Main St, Montana IL 31450', '555-534-2342'),
    createCustomer(4, 'Lily Thompson', '353 Rochester St, Rialto FL 43250', '555-534-2342'),
    createCustomer(5, 'Stephanie Black', '251 Market St, Deauville CA 94325', '555-534-2342'),
];

const useStyles = makeStyles({
    table: {
        borderBottom: '2px solid rgba(224, 224, 224, 1)',
        paddingTop: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    mainDiv: {
        padding: '0 10%'
    },
    header: {
        fontWeight: 'bold',
        display: 'inline',
    },
    button: {
        textTransform: 'none',
        display: 'inline',
        marginLeft: 20,
    },
});

export default function Customers() {
    const classes = useStyles();
    
    return (
        <div className={classes.mainDiv}>
            <Typography variant="h4" component="h1" className={classes.header}>Customer list</Typography>
            <Button variant="outlined" className={classes.button} onClick={() => { alert('clicked') }}>Create</Button>
            <Table size="small">
                <TableHead className={classes.table}>
                    <TableRow>
                        <TableCell className={classes.bold}>#</TableCell>
                        <TableCell className={classes.bold}>Name</TableCell>
                        <TableCell className={classes.bold}>Address</TableCell>
                        <TableCell className={classes.bold}>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(customer => (
                        <TableRow key={customer.id}>
                            <TableCell>{customer.id}</TableCell>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.address}</TableCell>
                            <TableCell>{customer.phone}</TableCell>
                        </TableRow>   
                    ))}
                </TableBody>                    
            </Table>
        </div>
    );
}