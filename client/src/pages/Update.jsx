import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Update = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    cover: '',
    price: 0
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async () => {
    const res = await axios.post('http://localhost:9000/books', book)
    if (res.status !== 200) return
    navigate('/')
  }

  return (
    <div className="form">
      <h1>Update The Book</h1>
      <input type="text" placeholder='title' name="title" id="title" onChange={handleChange} />
      <input type="text" placeholder='desc' name="desc" id="desc" onChange={handleChange} />
      <input type="text" placeholder='cover' name="cover" id="cover" onChange={handleChange} />
      <input type="number" placeholder='price' name="price" id="price" onChange={handleChange} />

      <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}
