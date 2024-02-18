///import { Card } from "react-bootstrap";
import "./AllTheBooks.css"
import { useState, useEffect } from "react";
import { SingleBook } from "../SingleBook/SingleBook.jsx"

//import libri from "./fantasy.json"
//https://epibooks.onrender.com/

export const AllTheBooks = () => {
    const [books, setBooks] = useState([]);
    const [booksTemp, setBooksTemp] = useState([]); //variabile temporanea che andrò a resettare con quella "definitiva" sopra definita
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const getBooks = async () => {
        setLoading(true)
        try {
            const result = await fetch("https://epibooks.onrender.com/scifi");
            const data = await result.json();

            setLoading(false);
            setBooks(data);
            setBooksTemp(data);

        } catch (e) {
            setError(e.message)

        }
    }
    // //cercare il libro che contiene il valore di ricerca nel titolo, tutto in lowerCase - ricerca per books (prima del compiuto su sigle book)
    // const filterBooks = (bookValue) => {
    //     setBooksTemp(books);
    //     let booksFiltered = books.filter((book) => book.title.toLowerCase().includes(bookValue.toLowerCase()))

    //     setBooksTemp(booksFiltered);

    // }

    const filterBooks = (bookValue) => {
        setBooksTemp(books);
        let booksFiltered = books.filter((book) => book.title.toLowerCase().includes(bookValue.toLowerCase()))
        setBooksTemp(booksFiltered);

    }
    const verifySearch = (e) => {
        //const asin = e.target.closest
        setSearchValue(e.target.value)
        e.target.value !== "" ? filterBooks(searchValue) : getBooks();
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
                <>
                    <div className="d-flex justify-content-between">
                        <h1>nr totale libri: {booksTemp.length}</h1>
                        <div className="d-flex mb-2 col-lg-3 gap-2">
                            <input type="text" className="form-control" placeholder="Cerca il tuo libro" value={searchValue} onChange={(e) => verifySearch(e)} />
                            <button id="searchBtn" className="btn btn-success" onClick={() => filterBooks(searchValue)}>Cerca</button>
                        </div>
                    </div>
                    <div className="row d-flex gap-3 justify-content-between">
                        {booksTemp.map((element) => (
                            <SingleBook key={element.asin} title={element.title} img={element.img} asin={element.asin} sele />
                        ))}
                    </div>
                </>
            )
            }
        </div >
    )

}

