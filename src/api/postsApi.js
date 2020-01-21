import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const postsApi = {
    async getPosts() {
        let response = await instance.get(`posts`)
        return response.data

    },

    async getAutorPosts(userId){
        let response = await instance.get(`posts?userId=${userId}`)
        return response.data
    }
}




