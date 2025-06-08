import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import Menu from './components/menu/'
import './App.css'

const Home = lazy(() => import('./pages/home/'));
const Navbar = lazy(() => import('./components/navbar/'));

function App() {

  return (
    <BrowserRouter>
      <div style={{position:"absolute", bottom:0, right:8}}>
        <Menu />
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Navbar />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
