import { Card } from "react-bootstrap";
import "./AllTheBooks.css"
import { useState, useEffect } from "react";

//import libri from "./fantasy.json"
//https://epibooks.onrender.com/
export const AllTheBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [searchValue, setSearchValue] = useState("");
    console.log(searchValue);

    const getBooks = async () => {
        setLoading(true)
        try {
            const result = await fetch("https://epibooks.onrender.com/history");
            const data = await result.json();

            setLoading(false)
            setBooks(data);

        } catch (e) {
            setError(e.message)

        }
    }
    //cercare il libro che contiene il valore di ricerca nel titolo, tutto in lowerCase
    const filterBooks = (bookValue) => {
        searchValue =
            booksFiltered = books.filter((book) => book.title.toLowerCase().includes(bookValue.toLowerCase()))
        setBooks(booksFiltered);
    }

    useEffect(() => {
        getBooks();
    }, []);

    return (

        <div className="container ">
            {loading && error === "" && (
                <>
                    <div>Aspetta n'attimo...</div>
                </>
            )}
            {error.length > 0 && (
                <div>{error}</div>
            )}
            {!loading && error === "" && (
                <> <div>nr totale libri: {books.length}</div>
                    <input type="text" placeholder="Cerca il tuo libro" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button id="searchBtn" onClick={() => filterBooks(searchValue)}>Cerca</button>
                    <div className="row d-flex gap-3">
                        {books.map((element) => (
                            <Card key={element.asin} style={{ width: '18rem' }}>
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
                </>
            )
            }
        </div >
    )
}