import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css';
import 'react-phone-input-2/lib/style.css';
import './global.css';
import { Provider } from 'react-redux';
import { store } from './Redux/Stores/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
