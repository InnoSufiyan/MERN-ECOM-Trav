import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';



function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
