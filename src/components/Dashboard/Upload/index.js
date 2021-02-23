import { useState } from 'react';
import { Input } from '../../Fields/Input';
import swal from 'sweetalert';
import { addCohort } from '../../../api/api';

export const Upload = () => {
    const [values, setValues] = useState({
        cohort_name: '',
        tagline: '',
        organisation: '',
        website: '',
        instructor: '',
        is_featured: '',
        profile_image: '',
        video_url: '',
        tags: '',
        admin_email: '',
        start_date: '',
        end_date: '',
        status: '',
        token: ''
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        console.log(values);

        const res = await addCohort(values);
        if(res){
            swal('Upload Success', '', 'success');
        }else{
            swal('Upload Failed', '', 'error');

        }

    };

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section class="text-gray-400 bg-gray-900 body-font relative">
            <div class="container px-5 py-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-6">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Add New Cohort
                    </h1>
                </div>

                <form>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <Input
                                label="Cohort Name"
                                name="cohort_name"
                                type="text"
                                handleChange={handleChange}
                                value={values.cohort_name}
                            />

                            <Input
                                label="Tagline"
                                name="tagline"
                                type="text"
                                handleChange={handleChange}
                                value={values.tagline}
                            />

                            <Input
                                label="Organisation"
                                name="organisation"
                                type="text"
                                width="1/2"
                                value={values.organisation}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Website"
                                name="website"
                                type="text"
                                width="1/2"
                                value={values.website}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Instructor"
                                name="instructor"
                                type="text"
                                width="1/2"
                                handleChange={handleChange}
                                value={values.instructor}
                            />

                            <Input
                                label="is_featured"
                                name="is_featured"
                                type="text"
                                width="1/2"
                                handleChange={handleChange}
                                value={values.is_featured}
                            />

                            <Input
                                label="Profile Image"
                                name="profile_image"
                                type="text"
                                value={values.profile_image}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Video Url"
                                name="video_url"
                                type="text"
                                value={values.video_url}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Tags"
                                name="tags"
                                type="text"
                                width="1/2"
                                value={values.tags}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Admin Email"
                                name="admin_email"
                                type="email"
                                width="1/2"
                                value={values.admin_email}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Start Date"
                                name="start_date"
                                type="date"
                                width="1/2"
                                value={values.start_date}
                                handleChange={handleChange}
                            />

                            <Input
                                label="End Date"
                                name="end_date"
                                type="date"
                                width="1/2"
                                value={values.end_date}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Status"
                                name="status"
                                type="text"
                                width="1/2"
                                value={values.status}
                                handleChange={handleChange}
                            />

                            <Input
                                label="Token"
                                name="token"
                                type="text"
                                value={values.status}
                                handleChange={handleChange}
                            />

                            {/* <div class="p-2 mt-4 w-1/2">
                                <div class="relative">
                                    <label
                                        for="email"
                                        class="leading-7 text-sm text-gray-400">
                                        Status
                                    </label>
                                    <select class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 p-3 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                        <option>Status</option>
                                        <option value="1">Active Cohort</option>
                                        <option value="2"> Past Cohort </option>
                                        <option value="3">
                                            {' '}
                                            Upcoming Cohort{' '}
                                        </option>
                                    </select>
                                </div>
                            </div> */}

                            <div class="p-2 w-full">
                                <button
                                    onClick={(e) => handleFormSubmit(e)}
                                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};
