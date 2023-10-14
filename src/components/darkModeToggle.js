import React, { useState, useEffect } from "react"
import {MdDarkMode} from 'react-icons/md'
import {BsBrightnessHigh} from 'react-icons/bs'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const body = document.querySelector("body")
    if (darkMode) {
      body.classList.add("dark")
    } else {
      body.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
      <button
        className="h-auto group rounded-full bg-white/90 px-3 py-2 shadow-lg
       shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition
        dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <MdDarkMode className="w-6 h-6 inline-block mr-2/" />
        ) : (
          <BsBrightnessHigh className="w-6 h-6 inline-block mr-2/" />
        )}
      </button>
  )
}

export default DarkModeToggle
