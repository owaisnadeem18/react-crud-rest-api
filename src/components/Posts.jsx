import React, { useEffect, useState } from 'react'
import { getData } from '../api/API'
import { Loader } from 'lucide-react'
import SinglePost from './SinglePost'

const Posts = ({setInput , setUpdateData , isEdit}) => {

    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    console.log(isEdit)
    
    const getPosts = async () => {
        try {
            const res = await getData()
            setData(res.data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div style={{ minHeight: "calc(100vh - 170px)" }} className='px-4 md:px-14' >

            {

                loading ? <div className='flex justify-center items-center' style={{ minHeight: "calc(100vh - 170px)" }} >
                    <Loader className='animate-spin text-white' />

                </div> :

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-12">
                        {data.map((post) => (
                           <SinglePost setInput={setInput} isEdit= {isEdit} setUpdateData = {setUpdateData} post={post} key={post.id} body={post.body} title={post.title} id={post.id} data={data} setData={setData} />
                        ))}
                    </div>
            }
        </div>
    )
}

export default Posts
