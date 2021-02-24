import { useEffect, useState } from 'react';
import { DummyLeadList, processLead, viewAllLeads } from '../../../api/api';

export const ViewAllLead = (props) => {
    const [leads, setLeads] = useState(DummyLeadList);
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
        <div class=" flex flex-col bg-gray-900 ">
            <div class="container px-5 py-10 mx-auto -my-2 overflow-x-auto">
                <div class="py-2 align-middle inline-block min-w-full ">
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
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text font-medium text-white-500 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" class="relative px-6 py-3">
                                            Action
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
            <td class="px-6 py-6 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img
                            class="h-10 w-10 rounded-full bg-gray-300"
                            alt=" thumnail"
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1614191721063/njouru9ia.png"
                        />
                    </div>
                    <div class="ml-4">
                        <div class="text-lg	 font-medium font-semibold	 text-white-900">
                            {props.payload.username}
                        </div>
                        <div class="text text-white-500">
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
            <td class="px-6 py-4 whitespace-nowrap text-sm text-white-500">
                {props.payload.createdAt.split('T')[0]}
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
