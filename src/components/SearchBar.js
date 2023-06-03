import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
export default function SearchBar() {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }
  };

  return (
    <div>
      <div class="mt-2">
        <div class="relative flex w-5/6 mx-auto flex-wrap items-stretch">
          <input
            type="text"
            class="relative mx-auto  block w-[1px] min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:text-neutral-700 focus:shadow-orange-300 focus:shadow-md focus:border-orange-300 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search a book / author"
            aria-label="Search"
            aria-describedby="button-addon2"
            ref={searchText}
          />

          <span
            class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 hover:text-orange-500 dark:text-neutral-200"
            id="basic-addon2"
          >
            <button
              type="submit"
              className="flex flex-c"
              onClick={handleSubmit}
            >
              <FaSearch className="text-orange" size={30} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
