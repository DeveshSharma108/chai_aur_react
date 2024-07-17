import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <h1>........HI..............</h1>
  )
}
/*
const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: "click here (google)"
}
*/

const anotherReactElement = (
  <a href="https://google.com" target='_blank'>Google</a>
)
const variable = " x" 
const reactElement = React.createElement("a",{href:"https://google.com",target:'_blank'},"click here (Google)",variable)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
