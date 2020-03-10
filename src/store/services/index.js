import axios from 'axios'

export const services ={
    getImages:(product) =>{
        const params = {
            key:'AIzaSyACvSSkPLcU8bBhvR-02Jq9rfYg6e6-l3g',
            cx:'006786573283166427044',
            searchType:'image',
            lr:'lang_pt',
            num:1,
            q: product
        }
        return axios.get('http://www.gooleapis.com/customsearch/v1', {params})
        .then(resp => resp.data.items[0].link)
        .catch(err => err);
    }
}