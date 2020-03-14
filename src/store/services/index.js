import axios from 'axios'

export const services ={
    getImages:(product) =>{
        const params = {
            key:'AIzaSyBT6PDbVyvMcMn_wfGUE8uKCfydxogsN7I',
            cx:'006786573283166427044:qttg4rgdtdh',
            searchType:'image',
            lr:'lang_pt',
            num:1,
            q: product
        }
        return axios.get('https://www.googleapis.com/customsearch/v1', {params})
        .then(resp => resp.data.items[0].link)
        .catch(err => err);
    }
}