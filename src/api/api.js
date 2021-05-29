import axios from "axios";
import { unfollow } from "../redux/reducer/usersReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "c8fc224f-56a1-4c34-b71b-e2d8493a38bf"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },

    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    }
}

// export const getUsers = (currentPage = 1, pageSize = 5) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data;
//     })
// }

export const auth = () => {
    return instance.get(`auth/me`)
    .then(response => {
        return response.data;
    })
}

export const getUserId = (userId) => {
    return instance.get(`profile/${userId}`)
    .then(response => {
        return response.data;
    })
}