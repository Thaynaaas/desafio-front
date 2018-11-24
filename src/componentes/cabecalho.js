import React from 'react'


const Cabecalho = props => {
    return (


        <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#conta">MINHA CONTA</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-left">

        <li><a href="#ofertas">OFERTAS</a></li>
        <li><a href="#produto">PRODUTOS</a></li>
        <li><a href="#contato">CONTATO</a></li>
        </ul>
    </div>
  </div>
</nav>
            )
            
            }
            
export default Cabecalho    