import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import Menu from './components/menu/'
import './App.css'

const Home = lazy(() => import('./components/home/'));
const Navbar = lazy(() => import('./components/navbar/'));

function App() {

  return (
    <BrowserRouter>
      <div style={{position:"absolute", bottom:0, right:8}}>
        <Menu />
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
