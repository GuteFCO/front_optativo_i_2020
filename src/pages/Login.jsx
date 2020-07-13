import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import LoginForm from '../containers/LoginForm';


const links = [
  {href: 'register', title: 'Registrarse'},
  {href: 'contact', title: 'Contacto'}
];


function Login(props) {
  return (
    <>
      <NavBar links={links} />
      <Content title="Ingresar">
        <LoginForm {...props} />
      </Content>
      <Footer />
    </>
  );
}

export default Login;
