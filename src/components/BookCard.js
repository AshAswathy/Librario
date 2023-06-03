import React from "react";
import hp from "../assets/hp.jpg";
import { useGlobalContext } from "../Context";
const BookCard = ({}) => {
  const { currentBook } = useGlobalContext();
  if (currentBook == null) {
    return "";
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-6">
      <img className="w-full" src={currentBook.cover_img} alt="ji" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-800 mb-3">
          {currentBook.title}
        </div>
        <p className="text-sm mb-1">
          <span className="font-semibold">Author name : </span>{" "}
          {currentBook.author?.join(", ").slice(0, 50)}
        </p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Edition count : </span>
          {currentBook.edition_count}
        </p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Publish Date : </span>
          {currentBook.first_publish_year}
        </p>
        <p className="text-sm mb-1">
          <span className="font-semibold">Number of Pages : </span>
          {currentBook.number_of_pages_median}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
