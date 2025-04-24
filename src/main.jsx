import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Courses from './pages/Courses.jsx'
import Habits from './pages/Habits.jsx'


createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route element={<App />} path='/'>
				<Route index path='/courses' element={<Courses />} />
				<Route index path='/habits' element={<Habits />} />
			</Route>
		</Routes>
	</BrowserRouter>,
)
