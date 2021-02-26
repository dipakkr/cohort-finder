import { Link } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-10 mx-auto">
                <h1 className="title-font sm:text-2xl w-full md:text-3xl text-2xl mb-8  text-white">
                    Admin Panel !
                </h1>
                <div class="flex flex-wrap -m-4 text-center">
                    <AdminControlLink
                        name={'View all applications'}
                        link={'/dashboard/leads'}
                    />

                    <AdminControlLink
                        name={'Add New Cohort'}
                        link={'/dashboard/upload'}
                    />

                    {/* <AdminControlLink
                        name={'Pending Cohorts'}
                        link={'/dashboard/pending-cohorts'}
                    />

                    */}

                     <AdminControlLink
                        name={'Update Cohort'}
                        link={'/dashboard/update'}
                    />

                    <AdminControlLink
                        name={'Analytics'}
                        link={'/dashboard/analytics'}
                    />
                </div>
            </div>
        </section>
    );
};

const AdminControlLink = (props) => {
    return (
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <Link to={props.link}>
                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg hover:border-green-400">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-indigo-400 w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24">
                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 class="title-font font-medium text-2xl text-red">
                        {props.name}
                    </h2>
                </div>
            </Link>
        </div>
    );
};
