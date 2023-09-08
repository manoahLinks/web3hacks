import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom'
import { Main } from './layouts'
import { ChooseUsername, Select, Welcome } from './pages'

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
        },

        {
          path: '/choose-username',
          element: <ChooseUsername/>
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
