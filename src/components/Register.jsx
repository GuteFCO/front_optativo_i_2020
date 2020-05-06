import React from 'react';
import NavBar from './NavBar';


function Register() {
  return (
    <>
      <NavBar />
      <section>
        <div class="tarjeta">
          <header>
            <h3>Registro</h3>
          </header>
          <form>
            <div>
              <label>Correo</label>
              <input type="email" placeholder="correo@ejemplo.cl" required />
            </div>
            <div>
              <label>Contrase&ntilde;a</label>
              <input id="password" type="password" required minlength="4" maxlength="8" />
            </div>
            <div>
              <label>Confirmar Contrase&ntilde;a</label>
              <input id="confirmacion" type="password" required minlength="4" maxlength="8" />
            </div>
            <div>
              <label>Navegadores Preferidos</label>
              <select required>
                <option value="" disabled selected>Seleccione...</option>
                <option value="google_chrome">Google Chrome</option>
                <option value="mozilla_firefox">Mozilla Firefox</option>
                <option value="safari">Safari</option>
                <option value="microsoft_edge">Microsoft Edge</option>
              </select>
            </div>
            <div>
              <label>Edad</label>
              <input type="number" min="1" max="150" step="any" required />
            </div>
            <div>
              <label>Descripci&oacute;n</label>
              <textarea rows="8">Texto ejemplo</textarea>
            </div>
            <div>
              <label>Lenguaje de Programaci&oacute;n Preferido</label>
              <input list="lenguajes" />
              <datalist id="lenguajes">
                <option>Javascript</option>
                <option>Python</option>
                <option>Java</option>
              </datalist>
            </div>
            <div>
              <label>Fecha de hoy</label>
              <output>23/04/2020</output>
            </div>
            <button id="registrarse">Registrarse</button>
          </form>
        </div>
      </section>
      <footer />
    </>
  );
}
 export default Register;
