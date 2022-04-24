import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';

const AppRouter = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/newproducts' element={<AddProduct />} />
            <Route path='/products/:productId' element={<ProductDetail />} />

        </Routes>
    </BrowserRouter>);
}

export default AppRouter;