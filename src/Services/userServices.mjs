import axios from "axios"
import { apiPath } from "./apiPath.mjs"

export const addNewPet = async (requestData, token) => {

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const response = await axios.post(`${apiPath}request/addRequest`, requestData,
        { headers }
    );
    return response
}

export const getProfile = async (userId, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const response = await axios.get(`${apiPath}user/profile/${userId}`,
        { headers }
    )
    return response
}

export const removeRequest = async (data, token) => {
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    const response = await axios.put(`${apiPath}request/removeRequest`, data,
        { headers }
    )
    return response
}