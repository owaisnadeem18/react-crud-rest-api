export const editPost = async (post , setInput , setUpdateData) => {
    setInput({
        title:post.title , 
        description: post.body
    })

    setUpdateData(post)
}