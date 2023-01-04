import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { DisplayPostsForUser } from './components/displayPostsForUser'
import { DisplayTribesForUser } from './components/displayTribesForUser'

function App() {
  const [count, setCount] = useState(0)

  const USER_ID = 1;

  return (
    <div className="App">
      <DisplayPostsForUser userId={ USER_ID } />
      <DisplayTribesForUser userId={ USER_ID } />
    </div>
  )
}

export default App
