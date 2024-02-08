import './App.scss';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as ROUTES from './util/Routes';
import { InitializeAnalytics } from './util/Analytics';

function App() {
  InitializeAnalytics();

  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESUME} element={<Home />} />
          <Route path={ROUTES.CONTACT} element={<Home />} />
          {/* <Route path={ROUTES.ARCHIVE} element={<Archive />} /> */}

          <Route
            path="*"
            element={
              <a href={ROUTES.HOME}>
                {' '}
                Page not found. Click here to go to the home page
              </a>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
