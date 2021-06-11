import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import LayoutPage from '../components/Layout'
import BtnSuite from '../components/BtnSuite'

import css from './CV.module.scss'

export default function CV() {
  const parallax = useRef()
  return (
    <LayoutPage className={css.bg}>
      <h1 className={css.title}>CV</h1>

      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div className={css.time}>
            <h2>Expériences professionnelles</h2>

            <h3>Freelance / Consultant Digital</h3>
            <div className={css.date}>de 2016 à aujourd'hui</div>
            <p>
              Je suis intervenu en tant que Chef de projet Digital, Webmaster, Développeur freelance, formateur et Consultant en transition
              digitale pour différents clients : Baliwood Design, Marbres & déco, Digital Salamander, TootyVR, Tween2Green, Sandrine May,
              Colorus Medias, Rayon de Lune, le Labyrinthe d'Allais, l'ERGOT, Pôle Emploi...
            </p>

            <h3>CEO / Développeur / Directeur créatif</h3>
            <div className={css.date}>de 2011 à 2015</div>
            <p>
              Durant ces 6 ans, je me suis plongé surtout dans la rédaction de dossiers, de business plan, beaucoup de R&D et de gestion de
              projets innovants, notamment avec la conception et le développement d'applications mobile, AR, VR et du storytelling
              non-linéaire.
            </p>

            <h3>Chef de projet / Développeur</h3>
            <div className={css.date}>de 2009 à 2010</div>
            <p>
              Conception et développement d’un site immobilier de type SeLoger incluant la gestion d’options, site qui sera revendu au
              groupe Pages Jaunes.
            </p>

          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div className={css.time}>

            <h3>Chef de produit</h3>
            <div className={css.date}>2008</div>
            <p>
              Mise en place d’un concept-store à Paris sur le thème du bien-être et de la technologie : Espace immersif de relaxation, site
              e-commerce et web-TV.
            </p>

            <h3>Webmaster Senior</h3>
            <div className={css.date}>de 2002 à 2007</div>
            <p>
              J'ai pris en charge la MOA au sein du service de la communication pour m'occuper des projets digitaux internes et externes en
              coordination avec la DSI et les intervenants tiers.
            </p>

            <h3>Chef de projet web</h3>
            <div className={css.date}>de 2000 à 2001</div>
            <p>
              En tant que chef de projet web, j'ai transposé sur internet les magazines du groupe de presse sous forme de portails internet
              communautaires et éditoriaux.
            </p>

          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div className={css.time}>
            <h2>Formation</h2>

            <h3>React.js
            <span className={css.date}> (2019)</span></h3>

            <h3>SCRUM méthode Agile
            <span className={css.date}> (2018)</span></h3>

            <h3>Unity 3D
            <span className={css.date}> (2016)</span></h3>

            <h3>BAC+4 Systèmes d'information
            <span className={css.date}> (1998)</span></h3>

            <h3>BTS Informatique de gestion
            <span className={css.date}> (1996)</span></h3>
          </div>
        </ParallaxLayer>
      </Parallax>
    </LayoutPage>
  )
}
