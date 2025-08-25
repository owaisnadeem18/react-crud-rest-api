import axios from "axios"

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getData = async () => api.get("/posts")

export const deleteData = async (id) => api.delete(`/posts/${id}`)