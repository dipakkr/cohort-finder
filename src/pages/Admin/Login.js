export const Login = () => {
    return (
        <section class="text-gray-600 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto ">
              
                <div class="lg:w-2/6  bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                        Access Admin Panel
                    </h2>
                    <div class="relative mb-4">
                        <label
                            for="full-name"
                            class="leading-7 text-sm text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div class="relative mb-4">
                        <label
                            for="email"
                            class="leading-7 text-sm text-gray-600">
                            Passsword
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Login
                    </button>
                </div>
            </div>
        </section>
    );
};
