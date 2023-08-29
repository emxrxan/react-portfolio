import React from 'react'
import './ImgContainer.css'

export default function ImgContainer(props) {
  return (
    <div className='imgContainer'>
        {props.list.map((element) => {
            return <img src={`${process.env.PUBLIC_URL}/img/${element}`} alt="notFound" key={element}/>

        })}
    </div>
  )
}
