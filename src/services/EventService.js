import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage, page) {
        return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    //add new call
    getEvent(id) {
        return apiClient.get('/events/' + id)
    }
}