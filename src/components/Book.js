import { useGlobalContext } from "../Context";
export default function Book(book) {
  const { setCurrentBook } = useGlobalContext();
  return (
    <div onMouseOver={() => setCurrentBook(book)}>
      <div class="w-full bg-white rounded-lg p-2 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:scale-110">
        <div class="mb-2">
          <img
            class="object-center object-fit h-32 w-24"
            src={book.cover_img}
            alt="cover"
          />
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-700 font-bold">
            {book.title.slice(0, 80)}
          </p>
          <p class="text-xs text-gray-500 font-normal mt-1">
            {book?.author?.join(", ").slice(0, 50)}
          </p>
        </div>
      </div>
    </div>
  );
}
