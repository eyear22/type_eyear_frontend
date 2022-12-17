import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from '../redux/auth';
import mail from '../redux/mail';
import reservation from '../redux/reservation';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth,
  mail,
  reservation,
});

export default persistReducer(persistConfig, rootReducer);
