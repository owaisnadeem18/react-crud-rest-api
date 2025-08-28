import { useState } from 'react';
import './App.css'
import Posts from './components/Posts'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  const [input, setInput] = useState({
    title: "",
    body: ""
  });

  const [updateData , setUpdateData] = useState({})

  const isEdit = Object.keys(updateData).length != 0

  return (
    <div className='bg-[#3C3C3C]' >
      <Header isEdit = {isEdit} setUpdateData={setUpdateData} updateData = {updateData} input = {input} setInput = {setInput} />
      <Posts setUpdateData = {setUpdateData} setInput= {setInput} />
      <Footer/>
    </div>
  )
}

export default App
