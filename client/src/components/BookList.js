//import React from "react";

import React, { Component } from "react";
import { gql } from "apollo-boost"; // we are importing this so as to handle query parsing
import { graphql } from "react";
// note the syantax of query
// this query is to get all the books

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
//once we write the query, we also should bind this query to component BookList
//we do that where we export the package and with the help of "graphql" package
class BookList extends Component {
  render() {
    return (
      <div>
        <ul id="book_list">
          <li>Book name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
// we have created this "BookList" component and we want to render that on the page
// so to do that, we are going to nest it in "app.js" file
// the name of the query that we want to bind to the component goes in as a parameter for
// graphql
// data is stored in "props" of the component
