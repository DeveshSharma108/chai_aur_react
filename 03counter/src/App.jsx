import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let likes = 10
  //let dislikes = 2

  let [likes,addLikes] = useState(10)                  // <--- why let ??   not what you are thinking 
  let [dislikes,addDislikes] = useState(2)             // instead of let use const and instead of 
  const like = ()=>{                                   // likes = likes + 1; addLikes(likes) and dislikes = ........
    likes = likes + 1                                  // use addLikes(likes+1) and dislikes(dislikes+1)
    addLikes(likes)                                    // it will still work why ???
    /*
    addLikes(likes + 1)
    addLikes(likes + 1)
    addLikes(likes + 1)
    addLikes(likes + 1)
    addLikes(likes + 1)
    will 5 clicks make likes = 20 (try it )
    video - 8 chai aur react playlist
    */
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
