import React from 'react'

const SinglePost = ({id , title , body}) => {
  return (
    <>
         <div
                                key={id}
                                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300"
                            >
                                <h1 className='underline font-bold' >
                                    {id}
                                </h1>
                                <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-1">
                                    {title}
                                </h2>                                                                                                                                      
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {body}
                                </p>

                                <div className='flex gap-3' >

                                    <button className="mt-4 text-sm bg-gray-700 p-2  text-white rounded-lg font-medium cursor-pointer hover:bg-gray-900">
                                        Update
                                    </button>
                                    <button className="mt-4 text-sm bg-gray-700 p-2  text-white rounded-lg font-medium cursor-pointer hover:bg-gray-900">
                                        Delete
                                    </button>
                                </div>
                            </div>
    </>
  )
}

export default SinglePost
