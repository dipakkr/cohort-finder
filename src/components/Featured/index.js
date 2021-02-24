import { useEffect, useState } from 'react';
import { CohortList, getAllCohort } from '../../api/api';
import { Card } from '../Card';

export const Featured = (props) => {
    const [projects, setProjects] = useState(CohortList.slice(0, 3));

    useEffect(() => {
        (async () => {
            const allProject = await getAllCohort(props.domain);
            setProjects(allProject);
        })();
    }, [props.domain]);


    let allItems;
    if (projects && projects.length > 0) {
        allItems = projects.slice(0, props.limit).map((item, index) => {
            return <Card data={item} key={index} />;
        });
    }

    if (projects && projects.length > 0) {
        return (
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 md:py-12 py-5 sm:py-5 mx-auto">
                    <h2 className="title-font sm:text-4xl text-3xl  mt-4 mb-8 text-white">
                        {props.heading}
                    </h2>
                    <div class="flex flex-wrap -m-4">{allItems}</div>
                </div>
            </section>
        );
    }else{
        return ''
    }

   
};
