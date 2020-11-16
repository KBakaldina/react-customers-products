import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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
        color: 'red',
        marginLeft: 20,
    },
    navbar: {
        backgroundColor: '#f2f2f2',
    },
    navbarUl: {
        listStyleType: 'none',
        paddingLeft: 0,
        padding: '15px 0px'
    },
    navbarLi: {
        margin: '0px 10px 0px 0px',
        display: 'inline',
    },
    navbarLink: {
        textDecoration: 'none',
        color: '#666666',
    }
}); 