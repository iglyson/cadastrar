import cancelaIMG from './imagem/cancela.png'
import {useState } from 'react';
import './Cadastro.css'

function App() {
  const[matricula,setMatricula] = useState("")
  const[placa,setPlaca] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Cadastrar Veícul!</span>

            <span className="login-form-title">
              <img src={cancelaIMG} alt=""/>
            </span>
              <div className="wrap-input">
                <input 
                  className={matricula !== ""? 'has-val input' : 'input'}
                  type="Matricula" 
                  value={matricula}
                  onChange={e => setMatricula(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Matricula"></span>

              </div>

              <div className="wrap-input">
                <input 
                  className={placa !== ""? 'has-val input' : 'input'}
                  type="Placa"
                  value={placa}
                  onChange={e => setPlaca(e.target.value)} 
                />
                <span className="focus-input" data-placeholder="placa"></span>

              </div>

              <div className="container-cadastra-form-btn">
                  <button className="cadastra-form-btn">Cadastrar</button>
              </div>

          </form>
        </div>

      </div>
    </div> 
  );
}

export default App;
