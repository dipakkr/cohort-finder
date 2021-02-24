import { Featured } from "../components/Featured"
import { Hero } from "../components/Hero"

export const Home = () => {
    return(
        <>  
            <Hero/>

            <Featured heading="Featured Cohorts" domain="featured" limit="3"/>

            <Featured heading="Coding Cohorts" domain="Software Development" limit="3" />

            <Featured heading="Design Cohorts" domain="Design" limit="3"/>

            <Featured heading="Entrepreneurship Cohorts" domain="Entrepreneurship" limit="3" />



        </>
    ); 
}