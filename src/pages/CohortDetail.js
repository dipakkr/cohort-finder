import { CohortTop } from "../components/CohortTop"

export const CohortDetail = (props) => {
    return(
        <>  
            <CohortTop id={props.match.params.id}/>
        
         </>
    ); 
}