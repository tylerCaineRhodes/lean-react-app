import React from 'react';
import style from './App.module.scss';

export default function App() {
  return (
    <React.Fragment>
      <div className={style.app}>
        <h1>React App</h1>
        <p>React App Rendered!</p>
      </div>
    </React.Fragment>
  );
}
