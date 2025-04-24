import { useState } from "react"
import { Link, Outlet } from "react-router"
import "./App.css"

function App() {
    const [whichOpen, setWhichOpen] = useState('home')

    return (
        <div className="min-h-screen bg-gray-600">
            <div className="flex justify-center gap-5 text-2xl text-white py-5">
                <Link to='/' onClick={() => setWhichOpen('home')} className={`border px-2 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:text-black ${whichOpen === 'home' && 'bg-yellow-500 border-yellow-500 text-black'}`}>Home</Link>
                <Link to='/courses' onClick={() => setWhichOpen('courses')} className={`border px-2 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:text-black ${whichOpen === 'courses' && 'bg-yellow-500 border-yellow-500 text-black'}`}>Courses</Link>
                <Link to='/habits' onClick={() => setWhichOpen('habits')} className={`border px-2 rounded-lg hover:bg-yellow-500 hover:border-yellow-500 hover:text-black ${whichOpen === 'habits' && 'bg-yellow-500 border-yellow-500 text-black'}`}>Habits</Link>
            </div>

            {
                whichOpen === 'home' && <div className="flex justify-center items-center min-h-[70vh]">
                    <h1 className="text-5xl font-mono font-bold bg-gradient-to-r from-yellow-500 to-red-500 via-amber-500 inline-block text-transparent bg-clip-text">All Advice Is Autobiographical!</h1>
                </div>
            }

            <Outlet />
        </div>
    )
}

export default App
