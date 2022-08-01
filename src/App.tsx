import './App.scss';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './util/Routes';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
// import { Archive } from './pages/Archive/Archive';
import { InitializeAnalytics } from './util/Analytics';

function App() {
  InitializeAnalytics();

  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESUME} element={<Resume />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          {/* <Route path={ROUTES.ARCHIVE} element={<Archive />} /> */}

          <Route path="*" element={<a href={ROUTES.HOME}>Return</a>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
