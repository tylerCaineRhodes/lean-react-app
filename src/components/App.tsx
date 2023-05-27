import React from 'react';
import style from './App.module.scss';
import '../tailwind.css';

export default function App() {
  return (
    <React.Fragment>
      <div
        className={`${style.app} flex flex-col justify-center items-center h-screen`}
      >
        <h1>React App</h1>
        <p>React App Rendered!</p>
        <p className="custom-banner">Time to build an app....</p>
      </div>
    </React.Fragment>
  );
}
