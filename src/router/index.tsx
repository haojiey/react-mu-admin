import Detail from '../page/Detail'
import LIST from '../page/List'

import { createBrowserRouter } from 'react-router-dom'

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
