import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css';

//Componente Login
import Login from './components/login/Login';

// Componentes Fijos
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
//import Footer from './components/footer/Footer';

//Componentes Dinamicos
import Administradores from './components/administradores/Administradores';

export default function App() {

  const auth = getAccessToken();
console.log(auth);
  if (!auth) {

    return (

      <Login />

    )
  }

  return (
    <div className="sidebar-mini">
      <div className="wrapper">
        <Header />
        <Sidebar />
        <BrowserRouter>
            
            <Routes>
            <Route exact path="/" component={Administradores} />
            </Routes>

</BrowserRouter>


      </div>
    </div>
  );
}


/*=============================================
Función para tener acceso al token
=============================================*/

const getAccessToken = ()=>{

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const id = localStorage.getItem("ID");
  const usuario = localStorage.getItem("USUARIO");
  
  if(!accessToken || accessToken === null ||
     !id || id === null ||
     !usuario || usuario === null
    ){
    return false;

  }
const metaToken = jwtDecode(accessToken); 

console.log(tokenExpira(accessToken, metaToken));
 if(!metaToken.data){
  console.log("FALSO SEGUNDO IF")
    return false;
 }

 if(tokenExpira(accessToken, metaToken) || metaToken.data.id !== Number(id) || metaToken.data.username !== usuario){
  console.log("FALSO TERCER IF")
   return false;

 }else{

   return true;

 }

}

/*=============================================
Función para verificar fecha de expiración del token
=============================================*/

const tokenExpira = (accessToken, metaToken)=>{

const seconds = 60;

const { exp } = metaToken;

const now = (Date.now()+seconds)/1000;

console.log("Fechas expiracion "+exp);
console.log("Fecha actual "+now);

return exp < now;

}
