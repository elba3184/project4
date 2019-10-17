import React from 'react'
import ReactDOM from 'react-dom'
// import '../src/styling/index.scss'
import 'bulma/css/bulma.css'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './components/App.jsx'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Router>
  <App/>
  </Router>,
  document.getElementById('root')
)
// registerServiceWorker();