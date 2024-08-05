import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './pages/main/Main';
import Product from './pages/product/Product';
import './styles/main.scss';

function App() {
	const location = useLocation();
	return (
		<main className='main'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/product' element={<Main />} />
				<Route path='/product/:id/:name' element={<Product />} />
				<Route path='*' element={<Main />} />
			</Routes>
			<Footer />
		</main>
	);
}

export default App;
