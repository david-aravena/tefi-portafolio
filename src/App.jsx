import { BrowserRouter, Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import Menu from './components/menu/'
import './App.css'

const Home = lazy(() => import('./pages/home/'));
const Navbar = lazy(() => import('./components/navbar/'));

function App() {

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: 1, overflow: 'auto'}}>
          <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<Navbar />} />
            </Routes>
          </Suspense>
        </div>

        <div>
          <Menu />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
