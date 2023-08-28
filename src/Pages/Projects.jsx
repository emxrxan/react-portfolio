import React, { useState, useEffect } from 'react'
import './Projects.css'
import ProjectButton from '../Components/ProjectButton/ProjectButton'
import ProjectBild from '../Components/ProjectBild/ProjectBild'
import ProjectList from '../ProjektList'


export default function Projects() {

  const [content, setContent] = useState("");
  const [contentList, setContentList] = useState([]);

  const currentContent = (event) => {
    setContent(event.target.textContent);
  }

  const changeContent = (content) => {
    switch(content){
      case"React": setContentList(ProjectList[0]); break;
      case"Javascript": setContentList(ProjectList[1]); break;
      case"API": setContentList(ProjectList[2]); break;
      default: alert("Something went wrong!")
    }
  }

  useEffect(() => {
    if(content !== ""){
      changeContent(content);
    }
  },[content])

  return (
    <section className='projectsContainer'>
      <p style={{margin:'auto', width:'80%', marginTop: '1rem', fontSize:'1.5rem'}}>Einige dieser Projekte enthalten einen Api-Key. Diese habe ich zur Sicherheit nicht als Github-Page veröffentlicht. Ich bitte um Entschuldigung:)</p>
      <ProjectButton onClick={currentContent} />
      <ProjectBild list={contentList} />
    </section>
  )
}
