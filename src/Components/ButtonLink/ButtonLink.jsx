import React from 'react'
import Button from '../Button/Button'
import './ButtonLink.css'

export default function ButtonLink(props) {
  return (
    <div className="buttonLink">
      {props.list.map((element) => {
        return <Button href={element.href} content={element.content} key={element.content}/>
      })}
    </div>
  )
}
