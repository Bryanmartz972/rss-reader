import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NewsPage from './pages/NewsPage'
import SettingsPage from './pages/SettingsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import BookmarksPage from './pages/BookmarksPage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Navigation'

function App() {
	return (
		<BrowserRouter>
		<Navigation />
			<Routes>
				<Route path='/' element={<NewsPage />}></Route>
				<Route path='/settings' element={<SettingsPage />}></Route>
				<Route path='/news/:id' element={<NewsDetailPage />}></Route>
				<Route path='/bookmarks' element={<BookmarksPage />}></Route>
				<Route path='/*' element={<NotFoundPage />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
