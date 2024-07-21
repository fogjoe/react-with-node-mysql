import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
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
      <h1>Add New Book</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={handleChange} />

        <label htmlFor="desc">Description</label>
        <input type="text" name="desc" id="desc" onChange={handleChange} />

        <label htmlFor="cover">Cover</label>
        <input type="text" name="cover" id="cover" onChange={handleChange} />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" onChange={handleChange} />

        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}
