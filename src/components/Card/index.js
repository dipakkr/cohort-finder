import { Link } from 'react-router-dom';

export const Card = (props) => {

    // get data 
    const {data} = props;

    return (
        <div class="p-4 md:w-1/3">
            <Link to="/cohort/13">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                    <img
                        class="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={data.profile_img}
                        alt="blog"
                    />
                    <div class="p-6">
                        <h1 class="title-font text-lg font-medium text-white mb-1">
                            {data.name}
                        </h1>

                        <h3 class="text-xs title-font font-medium text-gray-500 mb-1">
                            Entrepreneurship
                        </h3>

                        <p class="leading-relaxed mb-3 mt-2">
                            Photo booth fam kinfolk cold-pressed sriracha
                        </p>
                        <div class="flex items-center flex-wrap ">
                            <Link
                                class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                                to="/cohort/13">
                                View More details
                                <svg
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
