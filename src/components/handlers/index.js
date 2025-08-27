import { deleteData, updateData } from "../../api/API"

export const handleValueChange = (e , setInput) => {

    const {name , value} = e.target
    
    setInput((prev) => ({
        ...prev , 
     [name] : value }))
}


export const handleSubmit = async (e ,  input, setUpdateData, id , setInput) => {
    e.preventDefault()
    const action = e.nativeEvent.submitter.value 

    console.log("action is => " , action)

    if (action == "Add") {
        addPost()
    }
    else {   
        const updatedPost = { id, ...input };
        editPost(updatedPost, setUpdateData , setInput );
    }

}   

export const editPost = async (post, setUpdateData, setInput) => {
    try {
        const res = await updateData(post.id, post);

        if (res.status === 200) {
            setUpdateData(post); 
            setInput({ title: "", body: "" });
        }
    } catch (err) {
        console.log("Update Error: ", err);
    }
};

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