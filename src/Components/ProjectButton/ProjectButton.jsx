import React from 'react'
import './ProjectButton.css'

export default function ProjectButton(props) {
  return (
    <div className='projectButton'>
        <button onClick={props.onClick}>React</button>
        <button onClick={props.onClick}>Javascript</button>
        <button onClick={props.onClick}>API</button>
    </div>
  )
}
