import React, { useState, useEffect } from "react";
import "./search.css";
import API from "../../utils/API";
import Book from "../Book/Book";

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState("Kittery");
    // Starting search term is Kittery, entering what I want to load 
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {
        API.searchBooks(searchTerm)
        .then(res =>
            setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm(value);
        // console.log(searchTerm)
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchTerm) {
            loadBooks();
            console.log(books);
        }
    }

    return (
        <div className="search card text-class">
            <div className="row justify-content-center">
                <form className="col-8">
                    <input type="text" className="form-control m-2" id="exampleBook" aria-describedby="bookHelp" placeholder="Enter book" 
                    onChange={handleInputChange}
                    name="books search"
                    placeholder="Keywords for books"/>
                </form>
                <button type="submit" className="btn btn-primary col-3 m-2"
                onClick={handleFormSubmit}>Submit</button>
            </div>
            <div className="pt-4">
                <div className="row book">
                    {books ? books.map((book) => (
                        <Book 
                        key={book.id}
                        volumeInfo={book.volumeInfo}
                        />
                    )) : null}
                </div>
            </div>

        </div>
    );
}

export default Search;