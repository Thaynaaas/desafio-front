This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

import  React , { Component } from  ' react ' ;

importar  Cabecalho  de  ' ./componentes/cabecalho ' ;
import  Inicio  from  ' ./componentes/inicio ' ;

import  minion30  de  " ./imagens/minion30.jpg "

import  minion  de  " ./imagens/minion.jpg "
import  contato  de  ' ./componentes/contato ' ;
import  Contato  de  ' ./componentes/contato ' ;
import  menina  de  " ./imagens/menina.jpg "
import  colecao2  de  " ./imagens/colecao2.jpg "
import  guerreiro  de  " ./imagens/guerreiro.jpg "
importe  Rodape  de  ' ./componentes/rodape ' ;

class  App  estende o  componente {
  render () {
    retorno (
      < div className = " App " >
          < Cabecalho / >

          < Inicio / >


          < img src = {minion30} className = " teste " alt = " minion30 " altura = " 400px " largura = " 1900px "  / >
          
< p > < / p >
< p > < / p >
< p > < / p >
          < img src = {minion} className = " teste " alt = " minion " altura = " 400px " largura = " 1900px "  / >

          < div >
          < div className = " texto do contentor-líquido-esquerdo bg-cinzento " >
            < h2 > Os mais vistos < / h2 >
            < div classNameName = " linha text-center " >
                < div className = " col-sm-4 " >
                    < div className = " miniatura " >
                        < img src = {menina} alt = " menina "  / >
                        < p > Minion menina < / p >
                        < button className = ' btn btn-padrão pull-right ' type = ' enviar ' > Comprar < / button >

                        < P > < strong > R $ 10 , 00 < / strong > < / p >

                    < / div >
                < / div >
                < div className = " col-sm-4 " >
                    < div className = " miniatura " >
                        < img src = {colecao2} alt = " colecao "  / >
                        < p > Coleção 9 mini - minions Carnaval < / p >
                        < p > < / p >
                        < P > < strong > R $  80 , 00 < / strong > < / p >
                        < button className = ' btn btn-padrão pull-right ' type = ' enviar ' > Comprar < / button >

                        < P > 4x de R $  20 , 00 Sem Juros < / p >
                    < / div >
                < / div >
                < div className = " col-sm-4 " >
                    < div className = " miniatura " >
                        < img src = {guerreiro} alt = " guerreiro "  / >
                        < p > Minions Guerreiro < / p >
                        < button className = ' btn btn-padrão pull-right ' type = ' enviar ' > Comprar < / button >

                        < P > < strong > R $ 10 , 00 < / strong > < / p >

                    < / div >
                < / div >
            < / div >
        < / div >
        < / div >

< Contato / >
< Rodape / >
      < / div >
    );
  }
}

exportar  App padrão  ;


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
