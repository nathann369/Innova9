
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';

const Home = lazy(() => import('./pages/Home').then((mod) => ({ default: mod.Home })));
const Courses = lazy(() => import('./pages/courses').then((mod) => ({ default: mod.Courses })));

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full w-full bg-white text-black">
        <Nav />
        <ScrollToHash />
        <Suspense fallback={<div className="min-h-[80vh] flex items-center justify-center px-6 text-sm font-medium text-slate-700">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
