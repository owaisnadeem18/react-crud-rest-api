import axios from "axios"

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getData = async () => api.get("/posts")

export const postData = async (post) => api.post("/posts" , post) 

export const deleteData = async (id) => api.delete(`/posts/${id}`)

export const updateData = async (id , post) => api.put(`/posts/${id}` , post)