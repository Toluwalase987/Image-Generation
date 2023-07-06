import axios from 'axios'

const searchImages = async (term)=>{
  const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID cguwswvHoUlv4B2q6XfYhL_XPOeP8SMMMhl6vVgsoMg'
        },
        params: {
            query: term
        }
    })
    return response.data.results;
}

export default searchImages