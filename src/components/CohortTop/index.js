export const CohortTop = (props) => {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 lg:py-24 sm:py-4 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl w-2/3 text-6xl mb-4 font-large text-white">
                        The design school of the future
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom
                        neutra air plant cold-pressed tacos poke beard tote bag.
                        Heirloom echo park mlkshk tote bag selvage hot chicken
                        authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <div class="flex justify-start">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=> props.handleClick('cta')}>
                            Learn more
                        </button>
                        <p className="text-xs p-2 w-1/2">
                            Pre registrations for the February 2021 Cohort are
                            now open.
                        </p>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-2/3 w-1/6">
                    <img
                        class="object-cover object-center rounded"
                        alt="hero"
                        src="https://uploads-ssl.webflow.com/5e3560ac9615a2309b6fb86c/5ea828dbf5ced8495d2d0a62_device_noshadows%201.png"
                    />
                </div>
            </div>
        </section>
    );
};
