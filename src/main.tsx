import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App'

import { store } from '/@/redux/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
