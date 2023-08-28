import React from 'react'
import './Header.css'
import { VscGithub } from 'react-icons/vsc'
import { BiLogoGmail } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="nav">
            <a href="https://github.com/emxrxan" target='_blanked' className='icon'><VscGithub /></a>
            <a href="mailto:emirgurk@gmail.com" className='icon'><BiLogoGmail /></a>
        </div>
        <div className="nav">
            <Link to={'/'}>Home</Link>
            <Link to={'/Projects'}>Projects</Link>
        </div>
    </header>
  )
}
