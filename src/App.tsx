import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './@app/redux/store';
import AppRouter from './@app/routers/AppRouters';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter/>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </Provider>
    </>
  );
}

export default App;
