import * as authAPI from '../api/auth';

const AUTH = 'AUTH'; //로그인 요청
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_ERROR = 'AUTH_ERROR';
const REGISTER = 'REGISTER'; //회원가입 요청
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR';

const TEST = 'TEST'; //로그인 요청
const TEST_SUCCESS = 'TEST_SUCCESS';
const TEST_ERROR = 'TEST_ERROR';

const initialState = {
  isLoading: null,
  data: null,
  error: null,
};

// 로그인
export const Test = () => async (dispatch: any) => {
  dispatch({ type: TEST });
  try {
    const test = await authAPI.TestAPI();
    dispatch({ type: TEST_SUCCESS, test: test });
  } catch (e) {
    dispatch({ type: TEST_ERROR, error: e });
  }
};

// 로그인
export const Login = (email: string, password: string) => async (dispatch: any) => {
  dispatch({ type: AUTH });
  try {
    const login = await authAPI.LoginAPI(email, password);
    dispatch({ type: AUTH_SUCCESS, login: login });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, error: e });
  }
};

// 회원가입
export const Register =
  (email: string, password: string, name: string, phoneNumber: string) => async (dispatch: any) => {
    dispatch({ type: REGISTER });
    try {
      const register = await authAPI.RegisterAPI(email, password, name, phoneNumber);
      dispatch({ type: REGISTER_SUCCESS, register: register });
    } catch (e) {
      dispatch({ type: REGISTER_ERROR, error: e });
    }
  };

export default function auth(state = initialState, action: any) {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case TEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.test.data,
        action: action,
        error: null,
      };
    case TEST_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case AUTH:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.login.data,
        action: action,
        error: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    case REGISTER:
      return {
        ...state,
        isLoading: true,
        data: null,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.register.data,
        action: action,
        error: null,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        action: action,
        error: action.error,
      };
    default:
      return state;
  }
}
