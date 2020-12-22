import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from 'react';

const AuthContext = createContext();

const initialState = {
  isAuth: false,
  isLoading: false,
};

const SET_AUTH = 'SET_AUTH';
const SET_LOADING = 'SET_LOADING';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH: {
      return { ...state, isAuth: action.payload };
    }
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const AuthProvider = (props) => {
  const [{ isAuth, isLoading }, dispatch] = useReducer(reducer, initialState);

  const login = useCallback(() => {
    dispatch({ type: SET_LOADING, payload: true });
    setTimeout(() => {
      dispatch({ type: SET_AUTH, payload: true });
      dispatch({ type: SET_LOADING, payload: false });
    }, 2000);
  }, []);

  const logout = useCallback(
    () => dispatch({ type: SET_AUTH, payload: false }),
    []
  );

  const authValues = useMemo(() => ({ isAuth, isLoading, login, logout }), [
    isAuth,
    isLoading,
    login,
    logout,
  ]);

  return <AuthContext.Provider value={authValues} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
