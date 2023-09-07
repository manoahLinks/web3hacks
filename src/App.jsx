import {
  createBrowserRouter,
  RouterProvider

} from 'react-router-dom'
import { Main } from './layouts'
import { Welcome } from './pages'

function App() {
  
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Main/>,
      children: [
        {
          index: true,
          element: <Welcome/>
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
