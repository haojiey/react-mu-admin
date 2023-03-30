import { createBrowserRouter } from 'react-router-dom'

import Detail from '../page/Detail'
import LIST from '../page/List'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LIST />
  },
  {
    path: '/detail',
    element: <Detail />
  }
])

export default routes
