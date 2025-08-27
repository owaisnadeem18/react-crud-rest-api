import { addPost } from "./addPost"
import { editPost } from "./editPost"

export const handleSubmit = (e) => {
    e.preventDefault()
    const action = e.nativeEvent.submitter.value 

    if (action == "Add") {
        addPost()
    }
    else {
        editPost()
    }

}