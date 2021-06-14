import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import LayoutPage from '../components/Layout'
import BtnScroll from '../components/BtnScroll'

import css from './CV.module.scss'

export default function CV() {
  const parallax = useRef()
  return (
    <LayoutPage className={css.bg}>
      <h1 className={css.title}>CV</h1>
      <BtnScroll />


      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 25,
            padding: 50
          }}>

            <h2>Expériences professionnelles</h2>

            <h3>Développeur / Consultant Digital</h3>
            <div className={css.date}>2016 - aujourd'hui</div>
            <p>
              Je suis intervenu en tant que Chef de projet Digital, Webmaster, Développeur React / Wordpress / Unity3D, Formateur et Consultant en transition
              digitale pour différents clients : Baliwood Design, Hôtes-Insolites, Marbres &amp; déco, Digital Salamander, TootyVR, Tween2Green, Pôle Emploi,
              le Labyrinthe d'Allais, l'ERGOT...
            </p>

            <h3>CEO / Développeur / Directeur créatif</h3>
            <div className={css.date}>2014-2015 / Colorus MEDIAS</div>
            <p>
              En tant que start-up, durant ces 2 ans, je me suis plongé surtout dans la rédaction de dossiers, de business plan, beaucoup de R&D et de gestion de
              projets innovants, notamment avec la conception et le développement d'applications mobile, AR, VR et du storytelling
              non-linéaire, dans le cadre d'un projet trans-média éducatif.
            </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 25,
            padding: 50
          }}>

            <h3>Producteur / Monteur</h3>
            <div className={css.date}>de 2011 à 2013 / REPLAY Agency &amp; REPLAY Productions</div>
            <p>
              Production de plusieurs court-métrages, de clips musicaux et de films d'entreprise,
              notamment dans le secteur du Yachting.
            </p>

          <h3>Chef de projet / Développeur</h3>
            <div className={css.date}>2009-2010 / JMD'Up</div>
            <p>
              Chargé seul de la conception fonctionnelle, de l'UI, de l'intégration et du développement d’un "clone" du site SeLoger.com en y incluant des fonctionnalités totalement innovantes : la gestion d’options et la côte des biens. Le site sera revendu au
              groupe Pages Jaunes.
            </p>

            <h3>Chef de produit</h3>
            <div className={css.date}>2008 / Le Cocon Digital</div>
            <p>
              Mise en place d’un concept-store à Paris sur le thème du bien-être et de la technologie : Espace immersif de relaxation, site
              e-commerce et web-TV.
            </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 25,
            padding: 50
          }}>

            <h3>Webmaster Senior</h3>
            <div className={css.date}>de 2002 à 2007 / Société Générale</div>
            <p>
              J'ai pris en charge la MOA au sein du service de la communication pour m'occuper des projets digitaux internes et externes en
              coordination avec la DSI et les intervenants tiers.
            </p>

            <h3>Chef de projet web</h3>
            <div className={css.date}>2000-2001 / Media Publications</div>
            <p>
              En tant que chef de projet web, j'ai transposé sur internet les magazines du groupe de presse sous forme de portails internet
              communautaires et éditoriaux.
            </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 25,
            padding: 50
          }}>
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
        </ParallaxLayer>
      </Parallax>
    </LayoutPage>
  )
}
