import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7f89d151-ae2e-4942-92f0-aabd82b0ee8d"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    }
};
export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get("profile/" + userId)
            .then(response => {
                return response.data;
            });
    }
}

export const followAPI = {
    follow(id){
        return instance.post('follow/' + id)
            .then(response => {
                return response.data;
            });
    },
    unfollow(id){
        return instance.delete('follow/' + id)
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    getAuthInfo(){
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            })
    }
}