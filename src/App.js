
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Home from './Home';
import Productos from './Productos';
import DetalleProducto from './DetalleProducto';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='productos' element={<Productos/>}></Route>
        <Route path="/productos/:id" component={DetalleProducto} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
