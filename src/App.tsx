import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
