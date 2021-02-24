import { useEffect, useState } from 'react';
import { processLead, viewAllLeads } from '../../../api/api';

export const ViewAllLead = (props) => {
    const [leads, setLeads] = useState([]);
    const [isProcessed, setisProcessed] = useState(false);

    const getLeadsData = async () => {
        const data = await viewAllLeads();
        setLeads(data);
    }

    useEffect(() => {
        getLeadsData();
    }, [props]);

    const handleProcessLead = async (id) => {

        const isProcessed = await processLead(id);
        setisProcessed(isProcessed);
    };

    useEffect(()=>{
        getLeadsData();

    },[isProcessed]);

    const getLeadRows = () => {
        const items =
            leads.length > 0 &&
            leads.map((item, index) => {
                return (
                    <SingleLeadRow
                        payload={item}
                        key={index}
                        updateLead={handleProcessLead}
                    />
                );
            });

        return items;
    };

    return (
        <div class="flex flex-col bg-gray-900 p-24 ">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
                        <h2 class="title-font font-medium text-3xl  text-white mb-10">
                            View all Applications
                        </h2>

                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-white">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text font-medium text-white-500 uppercase tracking-wider">
                                        UserData
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text font-medium text-white-500 uppercase tracking-wider">
                                        Cohort Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text font-medium text-white-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text font-medium text-white-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">
                                            Send to Admin
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-white-100">
                                {getLeadRows()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SingleLeadRow = (props) => {
    return (
        <tr className="bg-white-900">
            <td class="px-6 py-4 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img
                            class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                            alt=""
                        />
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-white-900">
                            {props.payload.username}
                        </div>
                        <div class="text-sm text-white-500">
                            {props.payload.user_email}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-white-900">
                    {props.payload.cohort_name}
                </div>
                {/* <div class="text-sm text-white-500">Optimization</div> */}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span
                    class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                        props.payload.is_processed === "0" ? 'red' : 'green'
                    }-100 text-white-800`}>
                    {props.payload.is_processed === "0"
                        ? 'Not Processed'
                        : 'Processed'}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-white-500">
                User
            </td>
            <td
                class={`px-6 py-4 whitespace-nowrap text-right text-sm   font-medium ${props.payload.is_processed === "0" ? 'cursor-pointer' : ''}  `}
                onClick={() => props.updateLead(props.payload._id)}>
                <span
                    className={`rounded-full p-2 bg-${
                        props.payload.is_processed === "0" ? '' : 'green'
                    }-100 text-white-800`}>
                    {' '}
                    {props.payload.is_processed === "0"
                        ? 'Share Lead'
                        : 'Lead Shared'}{' '}
                </span>
            </td>
        </tr>
    );
};
