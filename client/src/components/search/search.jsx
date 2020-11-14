import React, { useState, useEffect } from "react";
import "./search.css";
import API from "../utils/API";

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
        if (searchTerm) {
            loadBooks();
            console.log(books);
        }
    }

    return (
        <div className="search card text-class">
            <div className="row justify-content-center">
                <form className="col-8">
                    <input type="text" class="form-control m-2" id="exampleBook" aria-describedby="bookHelp" placeholder="Enter book" />
                    {/* handleInputChange={this.handleInputChange} */}
                </form>
                <button type="submit" class="btn btn-primary col-3 m-2">Submit</button>
            </div>

        </div>
    );
}

export default Search;