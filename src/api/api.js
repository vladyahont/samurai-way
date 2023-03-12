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

    getFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    getUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logOut() {
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}


