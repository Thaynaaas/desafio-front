import React, { Component } from 'react';

import Cabecalho from './componentes/cabecalho';
import Inicio from './componentes/inicio';

import minion30 from "./imagens/minion30.jpg"

import minion from "./imagens/minion.jpg"
import contato from './componentes/contato';
import Contato from './componentes/contato';
import menina from "./imagens/menina.jpg"
import colecao2 from "./imagens/colecao2.jpg"
import guerreiro from "./imagens/guerreiro.jpg"
import Rodape from './componentes/rodape';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Cabecalho />

          <Inicio />


          <img src={minion30} className="teste" alt="minion30" height="400px" width="1900px" />
          
<p></p>
<p></p>
<p></p>
          <img src={minion}  className="teste" alt="minion" height="400px" width="1900px" />

          <div>
          <div className="container-fluid text-left bg-grey">
            <h2>Os mais vistos</h2>
            <div classNameName="row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={menina} alt="menina" />
                        <p>Minion menina</p>
                        <button className='btn btn-default pull-right' type='submit'>Comprar</button>

                        <p><strong>R$10,00</strong></p>

                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={colecao2} alt="colecao" />
                        <p> Coleção 9 mini-minions Carnaval</p>
                        <p></p>
                        <p><strong>R$ 80,00</strong></p>
                        <button className='btn btn-default pull-right' type='submit'>Comprar</button>

                        <p>4x de R$ 20,00 sem juros </p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={guerreiro} alt="guerreiro" />
                        <p>Minions Guerreiro</p>
                        <button className='btn btn-default pull-right' type='submit'>Comprar</button>

                        <p><strong>R$10,00</strong></p>

                    </div>
                </div>
            </div>
        </div>
        </div>

<Contato/>
<Rodape/>
      </div>
    );
  }
}

export default App;
