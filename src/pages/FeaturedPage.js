import { Featured } from '../components/Featured';

export const FeaturedPage = () => {
    return (
        <>

            <Featured heading="Featured Cohorts" domain="featured" limit="3" />

            <Featured
                heading="Coding Cohorts"
                domain="Software Development"
                limit="3"
            />

            <Featured heading="Design Cohorts" domain="Design" limit="3" />

            <Featured
                heading="Entrepreneurship Cohorts"
                domain="Entrepreneurship"
                limit="3"
            />

            <Featured
                heading="Writting Cohorts"
                domain="Writting"
                limit="3"
            />
        </>
    );
};
