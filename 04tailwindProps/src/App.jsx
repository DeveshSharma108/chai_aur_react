import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const product1 = {
    image_url: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
    productName: "Macbook",
    productType: "Laptop"
  }

  const product2 = {
    image_url: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?size=626&ext=jpg",
    productName: "Iphone",
    productType: "Mobile"
  }

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>Our Products</h1>
      <Card product = {product1}/>
      <Card product = {product2}/>
    </>
  )
}

export default App
