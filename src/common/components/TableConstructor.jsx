import React from 'react';
import Table from '@material-ui/core/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from '../functions/useStyles';
import PageHeader from '../components/PageHeader';
import ButtonElement from './ButtonElement';
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
                        <TableCell className={classes.bold}>#</TableCell>
                        {Object.keys(tableHeaders).map((key, index) => <TableCell key={index} className={classes.bold}>{tableHeaders[key]}</TableCell>)}
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
                                        <ButtonElement display={buttons?.edit?.display} text='Edit' onClickFunction={buttons?.edit?.onClick} />
                                        <ButtonElement display={buttons?.delete?.display} text='Delete' onClickFunction={buttons?.delete?.onClick} />
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