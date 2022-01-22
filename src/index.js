import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';

const store = configureStore()

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//   , document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
   <BrowserRouter>
                 <Route path="/" component={App} />
  
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
 );
