// import React, { Component } from "react";
import React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from "./components/header";
import Search from "./components/search";
import Saved from "./components/saved";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div className="row navigation navbar navbar-light bg-light">
          <div className=" col-12 navigation-sub">
            <Link to="/" className="item navbar-brand">Search</Link>
            <Link to="/saved" className="item navbar-brand">Saved</Link>
          </div>
        </div>
        <Header />

        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}


export default App;

// function Books() {
//   // Setting our component's initial state
//   const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({
//     title: "",
//     author: "",
//     synopsis: ""
//   })

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])

//   // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res => 
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveBook({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(() => setFormObject({
//           title: "",
//           author: "",
//           synopsis: ""
//         }))
//         .then(() => loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//                 value={formObject.title}
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//                 value={formObject.author}
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//                 value={formObject.synopsis}
//               />
//               <FormBtn
//                 disabled={!(formObject.author && formObject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {books.length ? (
//               <List>
//                 {books.map(book => {
//                   return (
//                     <ListItem key={book._id}>
//                       <a href={"/books/" + book._id}>
//                         <strong>
//                           {book.title} by {book.author}
//                         </strong>
//                       </a>
//                       <DeleteBtn onClick={() => deleteBook(book._id)} />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Books;

