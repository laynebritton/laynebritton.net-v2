import './App.scss';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './util/Routes';
import { InitializeAnalytics } from './util/Analytics';
import NotFound from './pages/NotFound/NotFound';

function App() {
  useEffect(() => {
    InitializeAnalytics();
  }, []);

  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESUME} element={<Home />} />
          <Route path={ROUTES.CONTACT} element={<Home />} />
          {/* <Route path={ROUTES.ARCHIVE} element={<Archive />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
