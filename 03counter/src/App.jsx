import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let likes = 10
  //let dislikes = 2

  let [likes,addLikes] = useState(10)  // why let ??
  let [dislikes,addDislikes] = useState(2)
  const like = ()=>{
    likes = likes + 1
    addLikes(likes)
    console.log("liked",likes)
  }

  const dislike = ()=>{
    dislikes = dislikes + 1
    addDislikes(dislikes)
    console.log("disliked",dislikes)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2><button onClick={like}>👍</button> = {likes}</h2>
      <h2><button onClick={dislike}>👎</button> = {dislikes}</h2>
    </>
  )
}

export default App
