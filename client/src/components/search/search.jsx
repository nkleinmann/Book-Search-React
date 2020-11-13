import React from "react";
import "./search.css";

const Search = (props) => {
    return (
        <div className="search card text-class">
            <div className="row">
                <div className="col-12">
                    <h3>Book Search</h3>
                    <h6>Book</h6>
                </div>
            </div>
            <div className="row">
                <form className="col-9 text-center">
                    <input type="text" class="form-control" id="exampleBook" aria-describedby="bookHelp" placeholder="Enter book" />
                </form>
                <button type="submit" class="btn btn-primary col-3">Submit</button>
            </div>

            </div>
    )
}

export default Search;