import cancelaIMG from './imagem/cancela.png'
import {useState } from 'react';
import './Cadastro.css'

function App() {
  const[registro,setRegistro] = useState("")
  const[placa,setPlaca] = useState("")
  const[marca,setMarca] = useState("")
  const[modelo,setModelo] = useState("")
  const[anomodelo,setAnoModelo] = useState("")
  const[cor,setCor] = useState("")
  
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Cadastrar Veículo!</span>

            <span className="login-form-title">
              <img src={cancelaIMG} alt=""/>
            </span>
              
              <div className="wrap-input">
                
                <input 
                  maxLength={14}
                  className={registro !== ""? 'has-val input' : 'input'}
                  type="registro" 
                  value={registro}
                  onChange={e => setRegistro(e.target.value)}
                />
                
                <span className="focus-input"  data-placeholder="Registro:" ></span>

              </div>

              <div className="wrap-input">
                
                <input 
                  maxLength={7}
                  className={cor !== ""? 'has-val input' : 'input'}
                  type="cor" 
                  value={cor}
                  onChange={e => setCor(e.target.value)}
                />
                
                <span className="focus-input"  data-placeholder="Cor:" ></span>

              </div>
              

              <div className="wrap-input">
                <input
                  maxLength={7} 
                  className={placa !== ""? 'has-val input' : 'input'}
                  type="Placa"
                  value={placa}
                  onChange={e => setPlaca(e.target.value)} 
                />
                <span className="focus-input" data-placeholder="Placa:"></span>

              </div>

              <div className="wrap-input">
                <input
                  maxLength={10}
                  minLength={4} 
                  className={marca !== ""? 'has-val input' : 'input'}
                  type="marca"
                  value={marca}
                  onChange={e => setMarca(e.target.value)} 
                />
                <span className="focus-input" data-placeholder="Marca:"></span>

              </div>

              <div className="wrap-input">
                <input 
                maxLength={6}
                  className={modelo !== ""? 'has-val input' : 'input'}
                  type="modelo"
                  value={modelo}
                  onChange={e => setModelo(e.target.value)} 
                />
                <span className="focus-input" data-placeholder="Modelo:"></span>

              </div>

              <div className="wrap-input">
                <input
                  maxLength={8} 
                  className={anomodelo !== ""? 'has-val input' : 'input'}
                  type="anomodelo"
                  value={anomodelo}
                  onChange={e => setAnoModelo(e.target.value)} 
                />
                <span className="focus-input" data-placeholder="Ano do Modelo:"></span>

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
