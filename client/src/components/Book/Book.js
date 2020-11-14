import React from "react";
import API from "../../utils/API";

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
                <p>Title: {volumeInfo.title}</p>
                <p>Author(s): {volumeInfo.authors}</p>
                <p>Description: {volumeInfo.description || "No description available"}</p>
                {/* <p>Image: <img src={volumeInfo.imageLinks.thumbnail} alt="book cover" thumbnail/></p> */}
                <p>Link: <a href={volumeInfo.infoLink}>{volumeInfo.title}</a> </p>
            </div>
        </div>
    )
}

export default Book;