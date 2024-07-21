import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import Books from '../pages/Books'
import Add from '../pages/Add'
import { Update } from '../pages/Update'

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Books />
//   },
//   {
//     path: '/add',
//     element: <Add />
//   },
//   {
//     path: '/update',
//     element: <Update />
//   }
// ])

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Books />} />
      <Route path="/add" element={<Add />} />
      <Route path="/update/:bookId" element={<Update />} />
    </Route>
  )
)
