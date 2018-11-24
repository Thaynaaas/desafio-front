import React from 'react'
import menina from "./imagens/menina.jpg"
import colecao2 from "./imagens/colecao2.jpg"
import guerreiro from "./imagens/guerreiro.jpg"

const ofertas = props => {


    return (
        <div className="container-fluid text-left bg-grey">
            <h2>Os mais vistos</h2>
            <div classNameName="row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={menina} alt="menina" />
                        <p>Minion Feminina</p>
                        <p><strong>R$10,00</strong></p>

                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={colecao2} alt="colecao" />
                        <p> Coleção 9 mini-minions Carnaval</p>
                        <p><strong>R$ 80,00</strong></p>
                        <p>4x de R$ 20,00 sem juros </p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={guerreiro} alt="guerreiro" />
                        <p>Minions Guerreiro</p>
                        <p><strong>R$10,00</strong></p>
                    </div>
                </div>
            </div>
        </div>
                        }
                        
                        
                        
                        )
                        export default ofertas

