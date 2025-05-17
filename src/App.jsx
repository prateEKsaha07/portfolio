import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RightSideBar from './components/RightSideBar'

function App() {
  return (
    <>
    <div className="relative">
      <Navbar />
      <div className="grid grid-col-1 lg: grid-col-12">
      {/* left scrollable */}
      <div className="lg:col-span-8">
      <Hero />
      </div>
      {/* right scrollable */}
      <div className="hidden lg:black lg:col-span-4">
        <RightSideBar />
      </div>
      </div>
    </div>
    </>
  )
}

export default App
