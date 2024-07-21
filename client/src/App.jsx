import { BrowserRouter, Link, Route, Router, useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
    <div>Hello World</div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </BrowserRouter>

      {/* <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/add')}>Add</button>
        <button onClick={() => navigate('/update')}>Update</button> */}
    </>
  )
}

export default App
