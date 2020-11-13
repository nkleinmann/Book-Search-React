import React from "react";
import "./search.css";

// Function to allow user to search employees
// handleInputChange = (event) => {
//     // let value = event.target.value;
//     // const name = event.target.name;
//     console.log(value);
//     // Set the state to input
//     // this.setState({
//     //     [name]: value
//     // }, () => {
//     //     if (this.state.search) {
//     //         let searchedEmps = filter.searchEmployees(this.state.search, this.state.currentSearchArray);
//     //         this.setState({
//     //             employees: searchedEmps,
//     //             orderBy: ""
//     //         })
//     //     } else {
//     //         this.setState({
//     //             employees: this.state.currentSearchArray,
//     //             orderBy: ""
//     //         })
//     //     }
//     // });
// };

const Search = (props) => {
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
    )
}

export default Search;