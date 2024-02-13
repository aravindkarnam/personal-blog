import React, { useState} from "react"
import { MdDarkMode } from "react-icons/md"
import { BsBrightnessHigh } from "react-icons/bs"

const DarkModeToggle = () => {
  const prevDarkState = JSON.parse(localStorage.getItem("dark") || false);
  const [darkMode, setDarkMode] = useState(prevDarkState)

  const toggleDarkMode = () => {
    const body = document.querySelector("body")
    if(darkMode===true){
      body.classList.remove("dark")
      localStorage.setItem("dark", false)
      setDarkMode(false);
    }
    else{
      body.classList.add("dark")
      localStorage.setItem("dark", true)
      setDarkMode(true);
    }
  }

  return (
    <button
      className="h-auto group rounded-full bg-white/90 px-3 py-2 shadow-lg
       shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition
        dark:bg-zinc-800/90 dark:ring-white/20 dark:hover:ring-white/30"
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <MdDarkMode className="w-6 h-6 inline-block text-white/30 mr-2/" />
      ) : (
        <BsBrightnessHigh className="w-6 h-6 inline-block mr-2/" />
      )}
    </button>
  )
}

export default DarkModeToggle
