import { useCallback, useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersEntry, setNumbersEntry] = useState(false)
  const [charactersEntry, setCharactersEntry] = useState(false)
  const [password, setPassword] = useState(8)

  // what is useCallback why it is used ??
  // useRef ??
   
  const passwordRef = useRef(null)  // (default value (in this case null))

  const passwordGenerator = useCallback(()=>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''
    if (numbersEntry) {
      str = str + '0123456789'
    }
    if (charactersEntry) {
      str = str + '@#$%^&()*_'
    }

    for (let i = 0; i <=  length; i++) {
      pass = pass + str.charAt((Math.floor(Math.random()*str.length+1)))
    }
    setPassword(pass)
  }
  ,[length,numbersEntry,charactersEntry,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    /*
      In react we have window object because react will compile and ultimately javascript will run but in next js there is server side rendering hence no direct window object
    */
    passwordRef.current?.select()
    // password.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  // what is useEffect hook why it is used ??

  useEffect(()=>{
    passwordGenerator()
  },[length,numbersEntry,charactersEntry,setPassword])


  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={14}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numbersEntry}
            id="numberInput"
            onChange={() => {
              setNumbersEntry((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charactersEntry}
            id="characterInput"
            onChange={() => {
              setCharactersEntry((prev) => !prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
