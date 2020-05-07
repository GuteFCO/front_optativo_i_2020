import React from 'react';
import InputLine from './InputLine';


export default function LoginForm() {
  return (
    <form>
      <InputLine label="Correo" type="text" />
      <InputLine label="Contrase&ntilde;a" type="password" />
      <button>Ingresar</button>
    </form>
  );
}
