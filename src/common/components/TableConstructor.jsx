import React from 'react';
import Table from '@material-ui/core/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from '../functions/useStyles';
import PageHeader from '../components/PageHeader';
import ButtonElement from './ButtonElement';

export default function TableConstructor(props) {
    const classes = useStyles();
    const { pageHeader, tableHeaders, data, keyProperty } = props;
    const buttons = props?.buttons?.isDefault ? defaultTableButtons : props.buttons;
    let i = 1;
    
    return (
        <div className={classes.mainDiv}>
            <PageHeader text={pageHeader}/>
            <ButtonElement display={buttons?.create?.display} text='Create' onClickFunction={buttons?.create?.onClick}/>
            <Table size='small'>
                <TableHead className={classes.table}>
                    <TableRow>
                        <TableCell className={classes.bold}>#</TableCell>
                        {Object.keys(tableHeaders).map(key => <TableCell className={classes.bold}>{tableHeaders[key]}</TableCell>)}
                        {buttons?.edit?.display ? <TableCell></TableCell> : null}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(item => (
                        <TableRow key={item[keyProperty]}>
                            <TableCell>{i++}</TableCell>
                            {Object.keys(tableHeaders).map(key => <TableCell>{item[key]}</TableCell>)}
                            <ButtonElement display={buttons?.edit?.display} text='Edit' onClickFunction={buttons?.edit?.onClick}/>
                            <ButtonElement display={buttons?.delete?.display} text='Delete' onClickFunction={buttons?.delete?.onClick}/>
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
        onClick: () => { alert('Create button clicked'); }
    },
    edit: {
        display: true,
        onClick: () => { alert('Edit button clicked'); }
    },
    delete: {
        display: true,
        onClick: () => { alert('Delete button clicked'); }
    },
};