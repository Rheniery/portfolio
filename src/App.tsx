import React from 'react';
import styles from './App.module.scss';
import RouteGuard from './components/RouteGuard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles['content-row']}>
        <RouteGuard />
      </div>
    </div>
  );
}

export default App;
