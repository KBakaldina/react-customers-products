import React from 'react';
import Table from '@material-ui/core/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from '../functions/useStyles';
import PageHeader from '../components/PageHeader';
import ModalElement from '../../containers/modals/ModalElement';

export default function TableConstructor(props) {
    const classes = useStyles();
    const { pageHeader, tableHeaders, data, keyProperty } = props;
    const buttons = props?.buttons?.isDefault ? defaultTableButtons : props.buttons;
    
    return (
        <div className={classes.mainDiv}>
            <div>
                <PageHeader text={pageHeader} />
                <ModalElement text='Create' data={buttons?.create} />
            </div>
            <Table size='small'>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>#</TableCell>
                        {Object.keys(tableHeaders).map((key, index) => <TableCell key={index}>{tableHeaders[key]}</TableCell>)}
                        {buttons?.edit?.display || buttons?.delete?.display ? <TableCell></TableCell> : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={item[keyProperty]} className={classes.tableRow}>
                            <TableCell>{index + 1}</TableCell>
                            {Object.keys(tableHeaders).map(key => <TableCell key={key}>{item[key]}</TableCell>)}
                            {buttons?.edit?.display || buttons?.delete?.display
                                ?  (<TableCell className={classes.contentCenter}>
                                        <ModalElement text='Edit' data={buttons?.edit} object={item} />
                                        <ModalElement text='Delete' data={buttons?.delete} object={item} />
                                    </TableCell>)
                                : null
                            }
                        </TableRow>   
                    ))}
                </TableBody>                    
            </Table>
        </div>
    );
}

const defaultTableButtons = {
    create: {
        display: true,
        onClick: () => { alert('Create button clicked'); },
        body: <p>Create button</p>,
    },
    edit: {
        display: true,
        onClick: () => { alert('Edit button clicked'); },
        body: <p>Edit button</p>,
    },
    delete: {
        display: true,
        onClick: () => { alert('Delete button clicked'); },
        body: <p>Delete button</p>,
    },
};