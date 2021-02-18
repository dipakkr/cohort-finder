export const Upload = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font relative">
            <div class="container px-5 py-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Add New Cohort
                    </h1>
                </div>

                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label
                                    for="name"
                                    class="leading-7 text-sm text-gray-400">
                                    Cohort Name
                                </label>
                                <input
                                    type="email"
                                    id="name"
                                    name="name"
                                    autoComplete="off"
                                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label
                                    for="email"
                                    class="leading-7 text-sm text-gray-400">
                                    Instructor
                                </label>
                                <input
                                    type="text"
                                    id="instructor"
                                    name="instructor"
                                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label
                                    for="start_date"
                                    class="leading-7 text-sm text-gray-400">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    id="start_date"
                                    name="start_date"
                                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label
                                    for="end_date"
                                    class="leading-7 text-sm text-gray-400">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    id="end_date"
                                    name="end_date"
                                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div class="p-2 w-full">
                            <div class="relative">
                                <label
                                    for="is"
                                    class="leading-7 text-sm text-gray-400">
                                    Profile Image
                                </label>
                                <input
                                    type="profile_image"
                                    id="profile_image"
                                    autoComplete="off"
                                    name="profile_image"
                                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div class="p-2 w-full">
                            <div class="relative">
                                <label
                                    for="email"
                                    class="leading-7 text-sm text-gray-400">
                                    Tags ( use comma separated )
                                </label>
                                <input
                                    type="text"
                                    id="instructor"
                                    name="instructor"
                                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>

                        <div class="p-2 mt-4 w-full">
                            <div class="relative">
                                <select class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 p-3 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                    <option>Status</option>
                                    <option value="1">Active Cohort</option>
                                    <option value="2"> Past Cohort </option>
                                    <option value="3"> Upcoming Cohort </option>
                                </select>
                            </div>
                        </div>

                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Upload
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
