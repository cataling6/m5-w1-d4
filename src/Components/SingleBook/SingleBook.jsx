import Card from 'react-bootstrap/Card';

export const SingleBook = (props) => {
    const img = props.img;
    const title = props.title;
    const asin = props.asin;

    return (
        <Card style={{ width: '18rem' }} className="border" id={asin}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}