import './App.scss';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './util/Routes';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESUME} element={<Resume />} />
          <Route path={ROUTES.CONTACT} element={<About />} />
          <Route path="*" element={<a href={ROUTES.HOME}>Return</a>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
