import {  useState } from 'react';
import { CohortList } from '../api/api';
import { Card } from '../components/Card';

const excludeColumns = ['end_date', 'start_date'];

export const Search = () => {


    const [results, setData] = useState(CohortList);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        filterList(e.target.value);
    };

    // filter records by search text
    const filterList = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === '') setData(CohortList);
        else {
            const filteredData = results.filter((item) => {
                return Object.keys(item).some((key) =>
                    excludeColumns.includes(key)
                        ? false
                        : item[key]
                              .toString()
                              .toLowerCase()
                              .includes(lowercasedValue)
                );
            });
            setData(filteredData);
        }
    };

    let allItems;
    if (results.length > 0) {
        allItems = results.map((item, index) => {
            return <Card key={index} data={item} />;
        });
    }

    return (
        <>
            <div className="bg-gray-900">
                <div class="flex w-full justify-center items-end">
                    <div class="relative mt-8 mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                        <input
                            type="text"
                            id="hero-field"
                            name="search"
                            value={searchText}
                            onChange={(e) => handleSearch(e)}
                            placeholder="Search Cohorts"
                            class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                </div>

                <section class="text-gray-400 bg-gray-900 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap -m-4">{allItems}</div>
                    </div>
                </section>
            </div>
        </>
    );
};
