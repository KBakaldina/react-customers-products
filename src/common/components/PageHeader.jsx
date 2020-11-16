import React from 'react';
import { useStyles } from '../functions/useStyles';
import { Typography } from '@material-ui/core';

export default function PageHeader(props) {
    const classes = useStyles();
    const { text } = props;

    return <Typography variant='h4' component='h1' className={classes.header}>{text}</Typography>
}