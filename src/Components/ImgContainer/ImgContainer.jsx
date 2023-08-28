import React from 'react'
import './ImgContainer.css'

export default function ImgContainer(props) {
  return (
    <div className='imgContainer'>
        {props.list.map((element) => {
            return <img src={`../img/${element}`} alt="Bild.png" title='Bild.png' key={element}/>
        })}
    </div>
  )
}
