import { CohortTop } from "../components/CohortTop"
import { CourseModule } from "../components/CourseModule"
import { Testimonial } from "../components/Testimonial"

export const CohortDetail = (props) => {
    return(
        <>  
            <CohortTop id={props.match.params.id}/>
        
            <CourseModule/>

            <Testimonial/>
         </>
    ); 
}