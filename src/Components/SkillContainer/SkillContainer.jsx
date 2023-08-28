import React from 'react'
import './SkillContainer.css'
import {TiHtml5} from 'react-icons/ti'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {BiLogoReact} from 'react-icons/bi'
import {BsGit} from 'react-icons/bs'

export default function SkillContainer() {
  return (
    <div className='skillContainer'>
        <TiHtml5 id='html'className='iconSize'/>
        <DiCss3 id='css' className='iconSize'/>
        <IoLogoJavascript id='javascript' className='iconSize'/>
        <BiLogoReact id='react' className='iconSize'/>
        <BsGit id='git' className='iconSize'/>
    </div>
  )
}
