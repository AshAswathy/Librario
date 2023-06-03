import { useGlobalContext } from "../Context";
export default function Filters(book) {
  const { setExtraParams } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("sort") != "") {
      setExtraParams("&sort=" + formData.get("sort"));
    } else {
      setExtraParams("");
    }
  }

  return (
    <div>
      <div class="ml-8">
        <div class="max-w-50 flex justify-around gap-4 bg-orange-50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 flex-col rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-center p-1 py-2 text-orange-700 font-medium">
                Sort
              </p>
              <ul class="grid grid-cols-1 gap-3">
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-orange-600 ">
                      <input
                        type="radio"
                        class="accent-orange-500 h-3 w-3 mr-0.5  rounded-full shadow "
                        name="sort"
                        value="editions"
                      />{" "}
                      Most Editions
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-orange-600">
                      <input
                        type="radio"
                        class="accent-orange-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value=""
                      />{" "}
                      Relevance
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-orange-600">
                      <input
                        type="radio"
                        class="accent-orange-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value="old"
                      />{" "}
                      First Published
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-orange-600">
                      <input
                        type="radio"
                        class="accent-orange-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value="new"
                      />{" "}
                      Most Recent
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-orange-600">
                      <input
                        type="radio"
                        class="accent-orange-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value="rating"
                      />{" "}
                      Top Rated
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              class="border-2 border-orange-500 rounded-full mt-5 ml-1 text-sm mx-auto px-3 py-2 w-28 text-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white"
            >
              Apply filters
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
