import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CommentList from '../CommentList/CommentList';
import "./CommentArea.css";
const CommentArea = (props) => {
    const show = props.show;
    const handleClose = props.handleClose;
    const title = props.title;
    const img = props.img;
    const asin = props.asin;
    const commList = props.comments;

    useEffect(() => {


    }, [asin]);

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
                <Modal.Body className='max-height-scroll'>
                    <CommentList commList={commList} />
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

export default CommentArea;