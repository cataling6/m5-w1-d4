import { Card } from "react-bootstrap";
import "./AllTheBooks.css"
import { useState, useEffect } from "react";

//https://epibooks.onrender.com/
export const AllTheBooks = () => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const result = await fetch("https://epibooks.onrender.com/history");
            const data = await result.json();

            return setBooks(data);

        } catch (e) {
            console.log("erore", e);
        }
    }
    console.log(books);
    useEffect(() => {
        getBooks();
    }, []);
    return (

        <div className="container ">
            <div className="row d-flex gap-3">
                {books.map(element => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.img} className="hover" />
                        <Card.Body>
                            {/* <Card.Title>{element.title}</Card.Title> */}
                            <Card.Text>
                                {element.category}
                            </Card.Text>

                        </Card.Body>
                    </Card>
                ))}
            </div>

        </div>
    )
}