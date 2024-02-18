import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ReviewModal = (props) => {
    //const [show, setShow] = useState(false);
    const show = props.show;
    const handleClose = props.handleClose;
    const title = props.title;
    const img = props.img;


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='d-flex flex-column' >
                    <Modal.Title>{title}</Modal.Title>
                    <img src={img} className='w-25' />
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReviewModal;