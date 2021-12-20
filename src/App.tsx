import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import BookList from './pages/BookList';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<BookList />} />
				<Route path="/add-new-book" element={<AddBook />} />
				<Route path="/update-book/:id" element={<AddBook />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
