import axios from "axios";
  

export const Api = async (
    {
        url,
        type,
        data = null,
}) => {
  
    
    var response = {}
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
    }
  
    if (type === 'get') {
        try {
            response = await axios.get(url, config)
        } catch (error) {
            response = error
            console.log(error)
        }
    }
    if (type === 'post') {
        try {
            response = await axios.post(url, data, config)
        } catch (error) {
            console.log(error)
            response = error
        }
    }
    return response
}
  