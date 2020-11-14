import React from "react";
import API from "./API";

const Book = ({ volumeInfo }) => {
    function handleBooksubmit(event) {
        event.preventDefault();
        if (volumeInfo.title) {
            API.saveBook(
                {
                    title: volumeInfo,
                    subtitle: volumeInfo.subtitle,
                    authors: volumeInfo.authors,
                    description: volumeInfo.description,
                    image: volumeInfo.imageLinks.thumbnail,
                    link: volumeInfo.infoLink
                }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    };
    return (
        <div className="col-12">
            <div className="card">
                <p>{volumeInfo.title}</p>
            </div>
        </div>
    )
}

export default Book;