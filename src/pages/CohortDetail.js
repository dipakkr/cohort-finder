import { useState } from 'react';
import { CohortTop } from '../components/CohortTop';
import { CourseModule } from '../components/CourseModule';
import { Popup } from '../components/Popup';
import { Testimonial } from '../components/Testimonial';

export const CohortDetail = (props) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = (params) => {
        if (params === 'cta') {
            setIsPopupVisible((value) => !value);
        }
    };

    const handlePopupClose = () => {
        setIsPopupVisible(false);
    }

    return (
        <>
            <CohortTop id={props.match.params.id} handleClick={handleClick} />

            <CourseModule />

            <Testimonial />

            {isPopupVisible ? <Popup handleClose={handlePopupClose} /> : ''}

            {/* */}
        </>
    );
};
