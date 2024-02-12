import { Card } from "react-bootstrap";
import "./AllTheBooks.css"
import { useState, useEffect } from "react";
import "./fantasy.json"
//https://epibooks.onrender.com/
export const AllTheBooks = () => {
    const [books, setBooks] = useState([]);

    // const getBooks = async () => {
    //     try {
    //         const result = await fetch("https://epibooks.onrender.com/history");
    //         const data = await result.json();

    //         return setBooks(data);

    //     } catch (e) {
    //         console.log("erore", e);
    //     }
    // }

    console.log(books);
    useEffect(() => {
        getBooks();
    }, []);


    const getBooks = () => {
        try {
            fetch('./scifi.json')
                .then((resp) => resp.json())
                .then((jsonData) => {
                    setBooks(jsonData);
                })
                .catch((e) => {
                    console.error("Errore", e);
                })

        } catch (e) {
            console.log("erore", e);
        }
    }


    return (

        <div className="container ">
            <div className="row d-flex gap-3">
                {books.map(element => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={element.img} className="hover" />
                        <Card.Body>
                            <Card.Title className="text-truncate pointer" title={element.title}>{element.title}</Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                                <span>{element.category}</span>
                                <span>{element.price} €</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}