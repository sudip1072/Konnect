import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import {configureStore} from './app/store/configureStore'
import ScrollToTop from './app/common/util/ScrollToTop'
import { loadEvents } from './features/event/eventActions'

const store = configureStore();
store.dispatch(loadEvents())

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
<Provider store={store}>
 <BrowserRouter>
 <ScrollToTop>
 <App />
 </ScrollToTop>
  
 </BrowserRouter>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
