import { useState } from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  const [currentLevel, setCurrentLevel] = useState(1);

  for (
    let i = (currentLevel - 1) * 10 + 1;
    i <=
    (currentLevel * 10 > Math.ceil(totalPosts / postsPerPage)
      ? Math.ceil(totalPosts / postsPerPage)
      : currentLevel * 10);
    i++
  ) {
    pages.push(i);
  }
  console.log(totalPosts / postsPerPage);
  return (
    <div className="inline-flex space-x-2 mb-8">
      {currentLevel > 1 && (
        <button
          onClick={() => setCurrentLevel(currentLevel - 1)}
          className="flex items-center justify-center w-10 h-10 text-orange-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-orange-100"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      )}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 text-orange-600 transition-colors duration-150 rounded-full focus:bg-orange-500 focus `}
        >
          {page}
        </button>
      ))}
      {(currentLevel + 1) * 10 < Math.ceil(totalPosts / postsPerPage) && (
        <button
          onClick={() => setCurrentLevel(currentLevel + 1)}
          className="flex items-center justify-center w-10 h-10 text-orange-600 transition-colors duration-150 bg-stone-100 rounded-full focus:shadow-outline hover:bg-orange-100"
        >
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      )}

      {
        // ${currentPage === page && 'bg-orange-600 text-white'}
      }
    </div>
  );
};

export default Pagination;
