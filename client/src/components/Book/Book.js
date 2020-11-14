import React from "react";
import API from "../../utils/API";

const Book = ({ volumeInfo }) => {
    function handleBooksubmit(event) {
        // event.preventDefault();
        if (volumeInfo.title) {
            API.saveBook(
                {
                    title: volumeInfo,
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
                <div className="row justify-content-center">
                <button className="save-btn col-3 m-3" onClick={handleBooksubmit}>Save</button>
            <button className="view-btn col-3 m-3"><a href={volumeInfo.infoLink} target="_blank">View</a></button>
                </div>
           
                <p>Title: {volumeInfo.title}</p>
                <p>Author(s): {volumeInfo.authors}</p>
                <p>Description: {volumeInfo.description || "No description available"}</p>
                <div>
                <img src= {volumeInfo.imageLinks?.thumbnail || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/100px-No_image_available.svg.png"} alt="book cover" />
                </div>
                {/* <p>Link: <a href={volumeInfo.infoLink} target="_blank">{volumeInfo.title}</a> </p> */}
                
            </div>
            
        </div>
    )
}

export default Book;