export const createslug = (name) => {

    if(name){
        let slug;
        slug = name.replace(' ', '-');
        return slug.toLowerCase();
    }
    return ''  
}

export const getBodyPayload = (data) => {

    let payload = {};

    if(data === 'featured'){
        payload['is_featured'] = '1'
    }else{
        payload['domain'] = data;
    }

    return payload;

}
