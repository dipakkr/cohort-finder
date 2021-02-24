export const createslug = (name) => {

    if(name){
        let slug;
        slug = name.replace(' ', '-');
        return slug.toLowerCase();
    }

    return ''
  
}