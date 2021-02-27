import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header class="text-gray-600 bg-gray-900 body-font md:py-10">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    to="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
                        viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl text-white"> Xplorer </span>
                </Link>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link
                        class="mr-5 text-small text-gray-100 hover:text-gray"
                        to="/explore">
                        Find Cohort
                    </Link>
                    <Link
                        class="mr-5 text-small text-gray-100 hover:text-gray"
                        to="/featured">
                        Featured
                    </Link>
                    <Link
                        class="mr-5 text-small text-gray-100 hover:text-gray"
                        to="/request-listing">
                            List your Cohort
                    </Link>
                    <Link
                        class="mr-5 text-small text-gray-100 hover:text-gray"
                        to="/dash">
                            Dashboard
                    </Link>
                </nav>
            </div>
        </header>
    );
};
