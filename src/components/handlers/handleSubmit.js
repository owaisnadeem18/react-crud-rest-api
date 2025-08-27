import { addPost } from "./addPost"
import { editPost } from "./editPost"

export const handleSubmit = (e) => {
    e.preventDefault()
    const action = e.nativeEvent.submitter.value 

    console.log("action is => " , action)

    if (action == "Add") {
        addPost()
    }
    else {
        editPost()
    }

}