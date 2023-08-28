import React from 'react'
import './ProjectBild.css'
import context from '../../Context';
import { useContext } from 'react';

export default function ProjectBild(props) {

  const {setShowDetail, setDetails} = useContext(context);

  const changeDetail = (element) => {
    setDetails(element);
    setShowDetail(true);
  }

  return (
    <div className='bildcontainer'>
      {props.list.map((element) => {
        return <div className='bild' style={{backgroundImage: `URL(../img/${element.backgroundImg})`}} onClick={() => changeDetail(element)} key={element.title}>
                <div className="bildContent">
                  <span>{element.title}</span>
                </div>
              </div>
      })}
    </div>
  )
}
