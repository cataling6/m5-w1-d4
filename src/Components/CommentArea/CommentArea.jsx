import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CommentList from '../CommentList/CommentList';
const CommentArea = (props) => {
    const [comments, setComments] = useState("");
    const [error, setError] = useState("");

    const show = props.show;
    const handleClose = props.handleClose;
    const title = props.title;
    const img = props.img;
    const asin = props.asin;
    const commList = comments;


    useEffect(() => {
        if (asin) {
            const getComments = async (asin) => {
                {
                    try {
                        const result = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`);
                        const data = await result.json();
                        setComments(data);
                    } catch (e) {
                        setError(e.message)
                    }
                }
            }
            getComments(asin);
        }

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
                <Modal.Body>
                    <CommentList commList={commList} />.
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