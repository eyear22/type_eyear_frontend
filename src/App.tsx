import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';
import MailPage from './pages/MailPage';
import MainPage from './pages/MainPage';
import SentMailPage from './pages/SentMailPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk.withExtraArgument({}), logger)));

const persistor = persistStore(store);

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mail" element={<MailPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/sentMail" element={<SentMailPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

export default App;
