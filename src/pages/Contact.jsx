import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import ContactForm from '../containers/ContactForm';


const links = [
  {href: 'login', title: 'Ingresar'},
  {href: 'register', title: 'Registrarse'},
];

export default function Contact(props){
  return (
    <>
      <NavBar links={links} />
      <Content title="Cont&aacute;ctenos">
        <ContactForm {...props} />
      </Content>
      <Footer />
    </>
  );
}
