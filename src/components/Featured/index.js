import { useEffect, useState } from 'react';
import { CohortList, getAllCohort } from '../../api/api';
import { Card } from '../Card';

export const Featured = (props) => {
    const [projects, setProjects] = useState(CohortList.slice(0, 3));

    useEffect(() => {
        console.log('hello');

        (async () => {
            const allProject = await getAllCohort();
            setProjects(allProject);
        })();
    }, []);


    let allItems;
    if (projects && projects.length > 0) {
        allItems = projects.map((item, index) => {
            return <Card data={item} key={index} />;
        });
    }

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 md:py-12 py-5 sm:py-5 mx-auto">
                <h2 className="title-font sm:text-4xl text-3xl  mt-4 mb-8 text-white">
                    {' '}
                    {props.heading}{' '}
                </h2>
                <div class="flex flex-wrap -m-4">{allItems}</div>
            </div>
        </section>
    );
};
