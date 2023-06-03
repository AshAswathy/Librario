import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import Pagination from "./components/Pagination";
const URL = "https://openlibrary.org/search.json?q=";
const Authors_URL = "";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("The lord of rings");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [bookLength, setBookLength] = useState(0);
  const [allBooks, setAllBooks] = useState(null);

  const [extraParams, setExtraParams] = useState("");

  const [authors, setAuthors] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  const lastBookIndex = currentPage * postsPerPage;
  const firstBookIndex = lastBookIndex - postsPerPage;

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${URL}${searchTerm}&limit=10&page=${currentPage}${extraParams}`
      );
      const data = await response.json();
      const { docs } = data;
      console.log(currentPage);
      setBookLength(data.numFound);

      if (docs) {
        setAllBooks(docs);
        const newBooks = docs.map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
            number_of_pages_median,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
            number_of_pages_median: number_of_pages_median,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm, currentPage, extraParams]);

  useEffect(() => {
    setCurrentBook(null);
    fetchBooks();
  }, [searchTerm, fetchBooks, currentPage, extraParams]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        postsPerPage,
        setCurrentPage,
        currentPage,
        firstBookIndex,
        lastBookIndex,
        bookLength,
        extraParams,
        setExtraParams,
        currentBook,
        setCurrentBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
