import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8187dba0-82b2-4e16-acfc-76b2ac205830'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },

    getFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}


