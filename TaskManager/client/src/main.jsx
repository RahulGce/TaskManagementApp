// import App from './App.jsx'
// import './index.css'
// import ReactDOM from 'react-dom/client';

// import {store} from './redux/store';
// import {Provider} from 'react-redux';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );


// src/main.jsx or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store'; // Ensure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
