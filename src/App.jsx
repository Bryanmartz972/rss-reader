import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<div>Hello world</div>}></Route>
				<Route path='/about' element={<div>about</div>}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
