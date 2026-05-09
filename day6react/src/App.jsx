import { useState } from 'react'
import Form from './Form.jsx'
import './App.css'
import CommentForm from './commentForm.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form/> */}
      <CommentForm/>
    </>
  )
}

export default App
