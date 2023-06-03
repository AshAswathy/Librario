import coverImg from ".././assets/No_cover.jpg";
import SearchBar from "./SearchBar";
import { useGlobalContext } from "../Context";
import Loading from "./Loader";
import Book from "./Book";
import Pagination from "./Pagination";
export default function BookList() {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;
  return (
    <div>
      <SearchBar />
      <section class="max-w-6xl mt-5 mx-auto px-4 sm:px-6 lg:px-4 py-4">
        <div className="ml-4  font-semibold text-lg text-gray-600">
          {resultTitle}
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {booksWithCovers.map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </section>
    </div>
  );
}
