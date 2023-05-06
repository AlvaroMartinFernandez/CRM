import React from 'react';
import Header from './componets/header/Header';
import Sidebar from './componets/sidebar/Sidebar';
import Administradores from './componets/administradores/Administradores';
export default function App() {
  return (
    <div className="sidebar-mini">
      <div className="wrapper">
        <Header/>
        <Sidebar/>
        <Administradores/>
      </div>
    </div>
  );
}