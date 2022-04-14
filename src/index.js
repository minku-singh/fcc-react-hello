import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import {books} from "./books";
import Book from "./Book";

const root = ReactDOM.createRoot(document.getElementById("root"));

function BookList(){
  return(
    <section className="booklist">
      {
        books.map(book => {
          return(
            <Book key = {book.id} {...book} />
          )
        })
      }
    </section>
  )
}

root.render(
  <BookList />
)