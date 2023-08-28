import React from 'react'
import ProfilContainer from '../Components/ProfilContainer/ProfilContainer'
import ButtonLink from '../Components/ButtonLink/ButtonLink'
import SkillContainer from '../Components/SkillContainer/SkillContainer'
import './Home.css'

export default function Home() {
  return (
    <section className='homeContainer'>
        <ProfilContainer />
        <ButtonLink list={
            [
              {href:"https://github.com/emxrxan", content:"Github."},
              {href:"mailto:emirgurk@gmail.com", content:"Contact me."}
            ]
          }/>
        <SkillContainer />
    </section>
  )
}
