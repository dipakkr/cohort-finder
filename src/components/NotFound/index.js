import { Link } from "react-router-dom"

import gifImage from '../../giphy.gif';

export const NotFound = (props) => {
    return(
        <section class="text-gray-400 bg-gray-900 h-auto body-font">
                <div class="container px-5 md:py-12 py-5 sm:py-5 	 mx-auto">

                    {props.showImage ? (
                        <div className="flex justify-center" >  
                            <img  src={gifImage} alt="in development " title="analytics module in development"/>
                        </div>
                    ) : ""}

                    <h2 className="title-font sm:text-4xl text-3xl py-24 text-center h-8 text-red-500	">
                        {props.message ? props.message : 'You are not autorized to view this page'}
                    </h2>
                    
                    
                    <p className="text-center "> <Link to='/dash'> Go back to Dashboard</Link></p>

                </div>
            </section> 
    )
}