import { memo, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = memo(function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async () => {
      const res = await axios.get('http://localhost:9000/books')
      if (res.status !== 200) return
      setBooks(res.data)
    }

    fetchAllBooks()
  }, [])

  const handleDelete = async id => {
    const res = await axios.delete(`http://localhost:9000/books/${id}`)
    if (res.status !== 200) return
    setBooks(prev => prev.filter(book => book.id !== id))
    // window.location.reload()
  }
  return (
    <div>
      <h1>Book Shop</h1>
      <div className="books">
        {books.map(book => (
          <div className="book" key={book.id}>
            {book.cover && <img src="" alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>

            <button className="delete" onClick={() => handleDelete(book.id)}>
              delete
            </button>
            <button className="update">
              <Link to={`/update/${book.id}`}>update</Link>
            </button>
          </div>
        ))}
      </div>

      <button style={{ marginTop: '20px' }}>
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  )
})

export default Books
