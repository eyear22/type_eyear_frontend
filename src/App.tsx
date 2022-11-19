import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MailPage from './pages/MailPage';
import MainPage from './pages/MainPage';
import SentMailPage from './pages/SentMailPage';
import UserPage from './pages/UserPage';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/mail" element={<MailPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/sentMail" element={<SentMailPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
