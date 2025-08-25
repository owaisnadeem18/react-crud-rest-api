import './App.css'
import Posts from './components/Posts'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  return (
    <div className='bg-[#3C3C3C]' >
    
      <Header/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default App
