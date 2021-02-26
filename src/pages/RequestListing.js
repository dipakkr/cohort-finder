import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

export const RequestListing = () => {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500);
    }, []);

    if(isLoaded){
        return (
            <section class="text-gray-400 body-font bg-gray-900 ">
                <div class="container flex justify-center overflow-y-hidden	 flex-column		   mx-auto ">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScQb1OOA6sca4jOXc5YT9ib-nGqYu_X3V2HFj9i4HLe68G-Mw/viewform?embedded=true"
                        width="900"
                        height="2597"
                        title="listing page"
                        marginwidth="0">
                        Loading…
                    </iframe>
                </div>
            </section>
        );
    }return(
        <> <Loader/> </>
    )

    
};
