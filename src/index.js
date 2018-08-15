import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

// const rootEl = document.getElementById('root');

// let render = ()=>{
// ReactDOM.render(<App />,rootEl)

// }

// if(module.hot){

//     module.hot.accept('./App',()=>{

//         setTimeout(render)
//     })
// }

// render(App);

ReactDOM.render(

 <BrowserRouter>
  <App />
 </BrowserRouter>,

document.getElementById('root'));
registerServiceWorker();
