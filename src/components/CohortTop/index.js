export const CohortTop = (props) => {


    return (
        <section class="text-gray-400 bg-gray-900 body-font py-12">
            <div class="container mx-auto flex px-4  md:flex-row flex-col flex-col-reverse	mb-16 items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-4  md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl  md:text-6xl text-4xl mb-4 font-medium text-white">
                        {props.data[0].cohort_name}
                    </h1>

                    <h3 className="title-font w-4/5 py-4 sm:text-4xl  md:text-2xl text-yellow-300 text-2xl mb-4 font-small text-white">
                        {props.data[0].tagline}
                    </h3>

                    {/* <p class="mb-8 leading-relaxed">
                      {props.data[0].tagline}
                    </p> */}
                    <div class="flex  flex-col md:flex-row justify-start  md:flex- py-6 ">
                        <button onClick={()=> props.handleClick('cta')} class=" text-center text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Register Now
                        </button>

                        {/* <p className="text-xs p-2 w-full md:w-1/2 ">
                            Pre registrations for the February 2021 Cohort are
                            now open.
                       </p> */}
                      
                    </div>
                  
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src={props.data[0].profile_image}
                    
                    />
                </div>
            </div>
        </section>
    );
};
