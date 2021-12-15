import axios from "axios";

const get = async({url, data, headers})=>{
    try{
        const response = axios({
            url: `${url}`,
            method: 'get',
            data,
            headers,
        })

        return response;
    } catch (error){

        return error;
    }
};

const post = async({url, data, headers})=>{
    try{
        const response = axios({
            url: `${url}`,
            method: 'post',
            data,
            headers,
        })

        return response;
    } catch (error){

        return error;
    }
};

export default { get, post };

