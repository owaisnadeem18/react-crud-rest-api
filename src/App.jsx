import { useState } from 'react';
import './App.css'
import Posts from './components/Posts'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  const [input, setInput] = useState({
    title: "",
    description: ""
  });

  const [updateData , setUpdateData] = useState({})

  return (
    <div className='bg-[#3C3C3C]' >
      <Header updateData = {updateData} setUpdateData= {setUpdateData} input = {input} setInput = {setInput} />
      <Posts setUpdateData = {setUpdateData} setInput= {setInput} />
      <Footer/>
    </div>
  )
}

export default App
