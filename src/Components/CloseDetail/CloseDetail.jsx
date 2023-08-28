import React from 'react'
import {GrClose} from 'react-icons/gr'
import './CloseDetail.css'

export default function CloseDetail(props) {
  return (
    <div className='close'>
        <GrClose onClick={props.onClick}/>
    </div>
  )
}
