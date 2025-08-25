import { deleteData } from "../../api/API"

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