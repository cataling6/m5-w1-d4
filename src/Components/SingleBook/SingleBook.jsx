import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import CommentArea from '../CommentArea/CommentArea';

export const SingleBook = (props) => {
    const [comments, setComments] = useState("");
    const [error, setError] = useState("");
    const [selected, setSelected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [asinForModal, setAsinForModal] = useState(""); //mi serve per passare id della card cliccata
    const img = props.img;
    const title = props.title;
    const asin = props.asin;

    const openModal = () => {
        setShowModal(true);
        setAsinForModal(asin);
        getComments(asin);
    }

    const closeModal = () => {
        setShowModal(false);
    }

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

    return (
        <>
            <Card style={{ width: '18rem' }} className={selected ? "border border-3 border-danger" : ""} id={asin} >
                <Card.Img variant="top" src={img} onClick={(e) => setSelected(!selected)} />
                <Card.Body>
                    <Card.Title className='text-truncate' title={title}>{title}</Card.Title>
                </Card.Body>
                <a type='button' className='btn btn-primary mb-2' onClick={openModal}>Recensioni</a>
            </Card>
            <CommentArea show={showModal} handleClose={closeModal} title={title} img={img} asin={asinForModal} comments={comments} />
        </>
    );
}