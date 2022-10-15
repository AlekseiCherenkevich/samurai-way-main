import axios from "axios";

const instanceAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '49958ebf-f227-43ac-a4ad-f0bc4550a02a'
    }
})

export const userAPI = {
     getUsers(pageSize: number, currentPage: number) {
         return instanceAPI.get(`users?count=${pageSize}&page=${currentPage}`)
             .then(res => res.data)
     },
     follow(id: number) {
         return instanceAPI.post(`follow/${id}`)
             .then(res => res.data)
     },
     unfollow(id: number) {
         return instanceAPI.delete(`follow/${id}`)
             .then(res => res.data)
     }
}
export const authAPI = {
    getAuthUserData() {
        return instanceAPI.get('auth/me')
            .then(res => res.data)
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instanceAPI.get(`profile/${userId}`)
            .then(res => res.data)
    }
}
