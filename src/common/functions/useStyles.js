import { makeStyles } from '@material-ui/core/styles';

const styles = {
    tableHead: {
        borderBottom: '2px solid rgba(224, 224, 224, 1)',
        paddingTop: 10,
    },
    tableRow: {
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        paddingTop: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    paddingLeft: {
        paddingLeft: '20px',
    },
    mainDiv: {
        padding: '0 10%'
    },
    contentCenter: {
        justifyContent: 'center',
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
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'white',
        border: '2px solid #000',
        padding: '10px 40px 10px 10px',
    },
};

export const useStyles = makeStyles(styles); 
export const useStylesForComponents = () => styles; 