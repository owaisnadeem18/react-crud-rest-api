import { deleteData, updateData } from "../../api/API"

export const handleValueChange = (e , setInput) => {

    const {name , value} = e.target
    
    setInput((prev) => ({
        ...prev , 
     [name] : value }))
}


export const handleSubmit = async (e ,  input, setUpdateData, id) => {
    e.preventDefault()
    const action = e.nativeEvent.submitter.value 

    console.log("action is => " , action)

    if (action == "Add") {
        addPost()
    }
    else {   
        const updatedPost = { id, ...input };
        editPost(updatedPost, setUpdateData);
    }

}   

export const editPost = async (post , setUpdateData) => {
    setUpdateData(post)
    await updateData(post.id , post)
}


export const deletePost = async (postId , data , setData ) => {

    try {
        const res = await deleteData(postId)
        if (res.status === 200) {
            const filteredPosts = data.filter((item) => item.id !== postId)
            setData(filteredPosts)
        }
    }

    catch(err) {
        console.log(err)
    }

}

export const addPost = async () => {
    alert("add new post function")
}