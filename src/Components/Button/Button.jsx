import React from 'react'

export default function Button(props) {
  return (
    <>
        <a href={props.href} target='_blanked'>{props.content}</a>
    </>
  )
}
