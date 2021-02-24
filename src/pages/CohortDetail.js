import { useEffect, useState } from 'react';
import { getSingleProject } from '../api/api';
import { CohortTop } from '../components/CohortTop';
import { CourseModule } from '../components/CourseModule';
import { Loader } from '../components/Loader';
import { Popup } from '../components/Popup';
import { Testimonial } from '../components/Testimonial';

export const CohortDetail = (props) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [cohortData, setCohortPageData] = useState([]);

    const handleClick = (params) => {
        if (params === 'cta') {
            setIsPopupVisible((value) => !value);
        }
    };

    const handlePopupClose = () => {
        setIsPopupVisible(false);
    };

    useEffect(() => {
        const cohort_slug = props.match.params.id;

        (async () => {
            const data = await getSingleProject(cohort_slug);
            setCohortPageData(data);
        })();
    }, [props]);

    if (cohortData && cohortData.length > 0) {
        return (
            <>
                <CohortTop
                    id={props.match.params.id}
                    handleClick={handleClick}
                    data={cohortData}
                />

                <CourseModule />

                <Testimonial />

                {isPopupVisible ? <Popup handleClose={handlePopupClose} /> : ''}

                {/* */}
            </>
        );
    } else {
        return (
            <>

                <Loader />
            </>
        );
    }
};
