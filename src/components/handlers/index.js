import { deleteData, updateData } from "../../api/API"

export const handleValueChange = (e , setInput) => {

    const {name , value} = e.target
    
    setInput((prev) => ({
        ...prev , 
     [name] : value }))
}


export const handleSubmit = async (e ,  input, setUpdateData, id , setInput , data , setData) => {

    console.log(input , id)

    e.preventDefault()
    const action = e.nativeEvent.submitter.value 

    console.log("action is => " , action)

    if (action == "Add") {
        addPost()
    }
    else {   
        const updatedPost = { id, ...input };
        editPost(updatedPost, setUpdateData, setInput , data , setData);
    }

    e.nativeEvent.submitter.value = "Add"

}   

export const editPost = async (post, setUpdateData, setInput , data , setData ) => {
    try {
        
        console.log(post)            

        const res = await updateData(post.id, post);

        if (res.status === 200) {
            setInput({
                title: "" ,
                body: ""
            });
        }

        setData((prev) => prev.map((item) => item.id == post.id ? res.data : item))

        setUpdateData({})

    } catch (err) {
        console.log("Update Error: ", err);
    }
};

export const startEdit = (post, setUpdateData, setInput) => {
  setUpdateData(post);
  setInput({
    title: post.title,
    body: post.body
  });
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
    alert("Add Post Function Called")
}