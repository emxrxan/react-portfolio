import React from 'react'
import './DetailContent.css'
import ButtonLink from '../ButtonLink/ButtonLink'
import ImgContainer from '../ImgContainer/ImgContainer'

export default function DetailContent(props) {
  return (
    <div className='detailContent'>
        <h1>{props.list.title}</h1>
        <p className='decribe'>
          <span>Description:</span>
          <span>{props.list.description}</span>
        </p>
        <ButtonLink list={
            [
                {href: props.list.github, content:"Github."},
                {href: props.list.page, content:"Page."}
            ]
        }/>
        <ImgContainer list={props.list.img}/>
        
    </div>
  )
}
