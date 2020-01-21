import * as axios from 'axios';
const url = {
    my_serwer: 'https://my-json-server.typicode.com/zizi62/myServer/',
    jsonplaceholder: 'https://jsonplaceholder.typicode.com/'
}

const instance = axios.create({
    baseURL:  url.jsonplaceholder
})


export const usersAPI = {

    async getUsers() {
        let response = await instance.get(`users`)
        return response.data

    },
    async setNewUser(userData) {

        let newUser = {
        username:userData.nickName,
        name: userData.firstName + ' '+ userData.lastName ,
        email: userData.email,
        address: {
            street: userData.street,
            suite: userData.suite,
            city: userData.city,
            zipcode: userData.zipcode
        },
        phone: userData.phone,
        company: { name: userData.companyName }
        }
       
        let response = await instance.post(`users`,newUser)
        return response.data

    }, async getProfile(userId) {
        let response = await instance.get(`users/${userId}`)
        return response.data
    }


}

export const todoAPI = {

    async getTodos(userId) {
        let response = await instance.get(`todos/?userId=${userId}`)
        return response.data

    }
    
}
