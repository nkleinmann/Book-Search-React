import React from "react";
import "./search.css";

const Search = (props) => {
    return (
        <div className="search card text-class">
            <div className="row justify-content-center">
                <form className="col-8">
                    <input type="text" class="form-control m-2" id="exampleBook" aria-describedby="bookHelp" placeholder="Enter book" />
                </form>
                <button type="submit" class="btn btn-primary col-3 m-2">Submit</button>
            </div>

            </div>
    )
}

export default Search;