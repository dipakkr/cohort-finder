import { CohortList } from '../../api/api';
import { Card } from '../Card';

export const Featured = () => {

    const results = CohortList.slice(0, 3)

    let allItems;
    if (results.length > 0) {
        allItems = results.map((item, index) => {
            return <Card data={item} key={index}/>;
        });
    }

    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">{allItems}</div>
            </div>
        </section>
    );
};
