import React from 'react';
import PageHeader from '../common/components/PageHeader';
import { useStyles } from '../common/functions/useStyles';

export default function StartPage() {
    const classes = useStyles();
    return <div className={classes.mainDiv}><PageHeader text='This is a test React App' /></div>;
}