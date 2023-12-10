import axios from "axios"
import { apiPath } from "./apiPath.mjs"

export const addNewPet = async (requestData, token) => {

    const headers = {
        baerer: token
    }

    const response = await axios.post(`${apiPath}user/addPet`, requestData,
        { headers }
    );
    return response;
}

export const getProfile = async (userId, token) => {
    const headers = {
        baerer: token
    }
    const response = await axios.get(`${apiPath}user/profile/${userId}`,
        { headers }
    );
    return response;
}