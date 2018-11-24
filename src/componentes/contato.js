import React from 'react'

const Contato =props => {

    return(

        <div id='contact' className='container-fluid bg-grey'>
            <h2 className='text-center'>CONTATO</h2>
            <div className='row'>
                <div className='col-sm-5'>
                    <p>Tá precisando de ajuda? </p>
                    <p>Você pode mandar uma mensagem, que o nosso Mega Minions retornara o contato em até 24 horas!</p>
                    <p><span className='glyphicon glyphicon-map-marker'></span> Rio de Janeiro, BR</p>
                    <p><span className='glyphicon glyphicon-phone'></span> +55 21991176125</p>
                    <p><span className='glyphicon glyphicon-envelope'></span> atendimento@minionstore.com.br</p>
                </div>
                <div className='col-sm-7 slideanim'>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='name' name='name' placeholder='Name' type='text' required />
                        </div>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                        </div>
                    </div>
                    <textarea className='form-control' id='comments' name='comments' placeholder='Comment' rows='5'></textarea><br />
                    <div className='row'>
                        <div className='col-sm-12 form-group'>
                            <button className='btn btn-default pull-right' type='submit'>Enviar</button>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Contato 