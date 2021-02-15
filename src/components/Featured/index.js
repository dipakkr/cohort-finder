import { CohortList } from '../../api/api';
import { Card } from '../Card';

export const Featured = (props) => {

    const results = CohortList.slice(0, 3)

    let allItems;
    if (results.length > 0) {
        allItems = results.map((item, index) => {
            return <Card data={item} key={index}/>;
        });
    }

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 md:py-12 py-5 sm:py-5 mx-auto">
            <h2 className="title-font sm:text-4xl text-3xl  mt-4 mb-8 text-white"> {props.heading} </h2>
                <div class="flex flex-wrap -m-4">{allItems}</div>
            </div>
        </section>
    );
};
