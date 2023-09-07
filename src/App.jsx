import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom'
import { Main } from './layouts'
import { Select, Welcome } from './pages'

function App() {
  
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Main/>,
      children: [
        {
          index: true,
          element: <Welcome/>
        },

        {
          path: '/select',
          element: <Select/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
