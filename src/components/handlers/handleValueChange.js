export const handleValueChange = (e , setInput) => {

    const {name , value} = e.target
    
    setInput((prev) => ({
        ...prev , 
     [name] : value }))
}