import React, { StrictMode } from 'react';
import ReactDOM, { hydrateRoot } from 'react-dom/client';
import App from '../pages';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement

// const root = ReactDOM.createRoot(
//   rootElement
// );

// ReactDOM.createRoot(rootElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
