import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './Components/todo-list/Todos'
import { Provider } from 'react-redux'
import { Store } from './Redux/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Todos />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)