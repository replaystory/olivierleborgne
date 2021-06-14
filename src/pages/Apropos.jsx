import React from 'react'

import LayoutPage from '../components/Layout'

import css from './Apropos.module.scss'

import FlipCard from '../components/FlipCard'
import img from '../assets/images/portrait.jpg'
import img2 from '../assets/images/portrait2.png'

export default function Apropos() {
  const front = (
    <p>
      Expert dans le domaine du digital depuis 20 ans. J'ai travaillé sur des projets variés dans les secteurs de l'audiovisuel, du web, du
      mobile et des jeux vidéos.
    </p>
  )

  return (
    <LayoutPage className={css.bg}>
        <FlipCard img={img} maxheight={280} title="Portrait">
          <img src={img2} alt="Portrait" style={{maxHeight: 280, width: 'auto'}} />
        </FlipCard>
        <FlipCard front={front}>
          <ul>
            <li>
              <span>Age&nbsp;:</span>
              <br />
              40 ans
            </li>
            <li>
              <span>Lieu&nbsp;:</span>
              <br />
              Cannes
            </li>
            <li>
              <span>Qualité&nbsp;:</span>
              <br />
              Patient
            </li>
            <li>
              <span>Compétence&nbsp;:</span>
              <br />
              Polyvalent
            </li>
            <li>
              <span>Métiers&nbsp;:</span>
              <br />
              Webmaster / Chef de projet
              <br />
              Développeur fullstack
            </li>
            <li>
              <span>Disponibilité&nbsp;:</span> Immédiate
            </li>
          </ul>
        </FlipCard>
    </LayoutPage>
  )
}
