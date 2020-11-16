import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from '../common/functions/useStyles';

export default function Navigation() {
    const classes = useStyles();
    return (
        <nav className={[classes.mainDiv, classes.navbar].join(' ')}>
            <ul className={classes.navbarUl}>
                <NavigationLink path='/' text='Invoice App' isBold={true}/>
                <NavigationLink path='/products' text='Products' />
                <NavigationLink path='/customers' text='Customers' />
            </ul>
        </nav>
    );
}

function NavigationLink(props) {
    const classes = useStyles();
    const { path, text, isBold } = props;
    const linkClassNames = isBold ? [classes.navbarLink, classes.bold].join(' ') : classes.navbarLink;

    return <li className={classes.navbarLi}><Link to={path} className={linkClassNames}>{text}</Link></li>;
}