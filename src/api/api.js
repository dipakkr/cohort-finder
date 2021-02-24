import axios from 'axios';
import { config } from '../config';

export const CohortList = [
    {
        name: 'Newton School',
        tagline: 'The Ultimate step towards your dream Job',
        creator: 'Newton School',
        start_date: '',
        end_date: '',
        cohort_status: '1',
        tags: ['full stack development', 'react', 'nodejs'],
        profile_image:'',
        'admin_id:': '123'
    },
    {
        name: '10k Designers',
        tagline: 'The design school of the future',
        creator: 'Abhinav Chhikara',
        start_date: '',
        end_date: '',
        cohort_status: '1',
        tags: ['design', 'ui', 'ux'],
        profile_image:'',
        'admin_id:': '122'
    },
    {
        name: '10k Designers 2',
        tagline: 'The design school of the future',
        creator: 'Abhinav Chhikara',
        start_date: '',
        end_date: '',
        cohort_status: '1',
        tags: ['design', 'ui', 'ux'],
        profile_image:'',
        'admin_id:': '122'
    },
    {
        name: '10k Designers 4',
        tagline: 'The design school of the future',
        creator: 'Abhinav Chhikara',
        start_date: '',
        end_date: '',
        cohort_status: '1',
        tags: ['design', 'ui', 'ux'],
        profile_img:
            'https://cdn.hashnode.com/res/hashnode/image/upload/v1613412366246/rXb2hHWd_.png',
        'admin_id:': '122'
    }
];

export const addCohort = async (payload) => {
    const URL = config.BASE_API_URL + '/api/project/add';

    try {
        const res = await axios.post(URL, payload);

        if (!res.data.error) {
            return true;
        }
    } catch (err) {
        return false;
    }
};


export const getAllCohort = async () => {
    const URL = config.BASE_API_URL + '/api/project/all';

    try {
        const res = await axios.get(URL);

        if(res.data && res.data.projects.length > 0){
            return res.data.projects;
        }

    } catch (err) {
        return [];
    }
}

export const getSingleProject = async (slug) => {

    const URL = config.BASE_API_URL + '/api/project/single/' + slug;

    try{
        const res = await axios.get(URL);

        if(res.data && !res.error){
            return res.data.project;
        }
    }catch(err){
        return [];
    }
}


export const saveLead = async (payload) => {

    const URL = config.BASE_API_URL + '/api/lead/save';

    try{
        const res = await axios.post(URL, payload);

        if(res.data && res.data.error == false){
            return true;
        }
    }catch(err){
        return false;
    }
}

export const viewAllLeads = async () => {

    const URL = config.BASE_API_URL + '/api/lead/view';

    try{
        const res = await axios.get(URL);

        if(res.data && res.data.error == false){
            return res.data.leads;
        }
    }catch(err){
        return [];
    }
}

export const processLead = async (id) => {

    const URL = config.BASE_API_URL + '/api/lead/update';

    const payload = {"lead_id" : id};

    try{
        const res = await axios.post(URL, payload);

        if(res.data && res.data.error == false){
            return true;
        }
    }catch(err){
        return false;
    }
    
}