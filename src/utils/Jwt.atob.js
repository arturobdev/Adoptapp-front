/* eslint-disable no-unused-vars */


export const decodePayload = (token) => {
    const decodePay = JSON.parse(atob(token.split('.')[1]));
    
    return {
        id : decodePay.sub,
        role : decodePay.role,
        email : decodePay.email
    }
}


