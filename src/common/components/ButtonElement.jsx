import React from 'react';
import { useStyles } from '../functions/useStyles';
import { Button } from '@material-ui/core';

export default function ButtonElement(props) {
    const classes = useStyles();
    const { display, onClickFunction, text } = props;

    if (!display) { return null; }
    return <Button variant='outlined'  className={classes.button} onClick={onClickFunction}>{text}</Button>;
}