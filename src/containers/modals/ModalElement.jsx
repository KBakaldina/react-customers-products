import React from 'react';
import { Modal, Backdrop } from '@material-ui/core';
import ButtonElement from '../../common/components/ButtonElement';
import { useStyles } from '../../common/functions/useStyles';

export default function ModalElement(props) {
    const { text, data, object } = props;
    const { display, Body, handle } = data;
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <span className={classes.paddingLeft}>
            <ButtonElement display={display} text={text} onClickFunction={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
                className={classes.modal}
            >
                <Body close={handleClose} handle={handle} object={object} />
            </Modal>
        </span>
    );
}