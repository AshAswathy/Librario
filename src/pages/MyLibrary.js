import BookList from "../components/BookList";
import Filters from "../components/Filters";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../Context";
import BookCard from "../components/BookCard";

export default function MyLibrary() {
  const {
    books,
    postsPerPage,
    setCurrentPage,
    bookLength,
    searchTerm,
    setSearchTerm,
  } = useGlobalContext();
  console.log(books.length, postsPerPage);
  return (
    <div className="container h-screen bg-orange-50 place-content-center fixed -p-4 overflow-fixed ">
      <div className="box-content border-2 border-orange-300  mx-auto mt-9 h-full w-5/6 bg-white shadow-2xl shadow-orange-500">
        <NavBar />

        <div className="grid grid-cols-5 gap-3">
          <div className="">
            <Filters />
          </div>
          <div className="col-span-3">
            <BookList />
            <div className="mx-auto flex justify-center">
              <Pagination
                totalPosts={bookLength}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              ></Pagination>
            </div>
          </div>

          <div>
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
}
