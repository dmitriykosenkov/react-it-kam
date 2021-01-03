import * as axios from 'axios';

const instaceAxios = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers: {
      "API-KEY": "ba964194-f87c-4642-b2f3-156ec9ed6f7e"
   }
})

export const usersAPI = {
   getUsers(currentPage, pageSize) {
      return instaceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => response.data)
   },
   follow(id) {
      return instaceAxios.post(`follow/${id}`)
         .then(response => response.data)
   },
   unfollow(id) {
      return instaceAxios.delete(`follow/${id}`)
         .then(response => response.data)
   }
}

export const authAPI = {
   authMe() {
      return instaceAxios.get(`auth/me`)
         .then(response => response.data)
   }
}

export const profileAPI = {
   getUserProfile(id) {
      return instaceAxios.get(`profile/${id}`)
      .then(response => response.data)
   },
   getUserStatus(id) {
      return instaceAxios.get(`profile/status/${id}`)
   },
   updateUserStatus(status) {
      return instaceAxios.put(`profile/status/`, {
         status: status
      })
   }
}

export const sidebarAPI = {
   getFriends(pageSize){
      return instaceAxios.get(`users?count=${pageSize}`)
         .then(response => response.data)
   }
}

