import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import RegisterForm from '../containers/RegisterForm';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'contact', title: 'Contacto'},
  {href: 'terminos', title: 'Términos y Condiciones'}
];


function Register(props) {
  return (
    <>
      <NavBar links={links} />
      <Content title="Registro">
        <RegisterForm {...props} />
      </Content>
      <Footer />
    </>
  );
}

export default Register;
