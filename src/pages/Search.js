import { SearchCard } from "../components/SearchCard"

export const Search = () => {
    return (
        <>
            <div className="bg-gray-900">
                <div class="flex w-full justify-center items-end">
                    <div class="relative mt-8 mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                        <input
                            type="text"
                            id="hero-field"
                            name="hero-field"
                            placeholder="Search Cohorts"
                            class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>

                <SearchCard/>
            </div>
        </>
    );
};
