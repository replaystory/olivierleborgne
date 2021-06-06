import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import LayoutPage from '../components/Layout'
import BtnSuite from '../components/BtnSuite'
import SkillsBar from '../components/SkillsBar'

import css from './Skills.module.css'

export default function Skills() {
  const parallax = useRef()
  const url = (name, wrap = false) => `${wrap ? 'url(' : ''}/images/${name}.svg${wrap ? ')' : ''}`

  const skillsReact = [
    { name: 'React', level: 75 },
    { name: 'NEXT.js', level: 85 },
    { name: 'Gatsby', level: 50 },
    { name: 'Express', level: 70 },
    { name: 'VS Code', level: 90 }
  ]

  const skillsHTML = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 70 },
    { name: 'Flexbox', level: 90 },
    { name: 'Tailwind', level: 50 }
  ]

  const skillsUnity = [
    { name: 'CSharp', level: 70 },
    { name: '2D', level: 90 },
    { name: '3D', level: 50 },
    { name: 'Shaders', level: 30 }
  ]

  const skillsDB = [
    { name: 'MongoDB', level: 60 },
    { name: 'MySQL', level: 90 },
    { name: 'Strapi', level: 50 },
    { name: 'Wordpress', level: 80 }
  ]

  return (
    <LayoutPage className={css.bg}>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <img className={css.img} src={url('screen')} style={{ width: '20%' }}
          onClick={() => parallax.current.scrollTo(1)} />
        </ParallaxLayer>

        {/* -------------------- PAGE 1 ---------------------- */}

        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#4644ad' }} />

        <ParallaxLayer
          offset={1.1}
          speed={0}
          factor={3}
          style={{
            opacity: 0.1,
            backgroundImage: url('react', true),
            backgroundSize: '90%',
            backgroundPosition: top
          }}
        />

        <ParallaxLayer offset={1.2} speed={0.5} style={{ position: 'absolute', top: 0 }}>
          <SkillsBar skills={skillsReact} />
          <BtnSuite parallax={parallax} numPage={2} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <h2 className={css.title}>React / NEXT.js</h2>
        </ParallaxLayer>

        {/* -------------------- PAGE 2 ---------------------- */}

        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#b213c7' }} />

        <ParallaxLayer
          offset={2.1}
          speed={0}
          factor={3}
          style={{
            opacity: 0.1,
            backgroundImage: url('html', true),
            backgroundSize: '90%',
            backgroundPosition: top
          }}
        />

        <ParallaxLayer offset={2.2} speed={0.5} style={{ position: 'absolute', top: 0 }}>
          <SkillsBar skills={skillsHTML} />
          <BtnSuite parallax={parallax} numPage={3} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.3}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <h2 className={css.title}>HTML5 / CSS3</h2>
        </ParallaxLayer>

        {/* -------------------- PAGE 3 ---------------------- */}

        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#106910' }} />

        <ParallaxLayer
          offset={3.1}
          speed={0}
          factor={3}
          style={{
            opacity: 0.1,
            backgroundImage: url('mongodb', true),
            backgroundSize: '90%',
            backgroundPosition: top
          }}
        />

        <ParallaxLayer offset={3.2} speed={0.5} style={{ position: 'absolute', top: 0 }}>
          <SkillsBar skills={skillsDB} />
          <BtnSuite parallax={parallax} numPage={4} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.3}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <h2 className={css.title}>MongoDB / MySQL</h2>
        </ParallaxLayer>

        {/* -------------------- PAGE 4 ---------------------- */}

        <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#3f3f3f' }} />

        <ParallaxLayer
          offset={4.1}
          speed={0}
          factor={3}
          style={{
            opacity: 0.1,
            backgroundImage: url('unity3d', true),
            backgroundSize: '90%',
            backgroundPosition: top
          }}
        />

        <ParallaxLayer offset={4.2} speed={0.5} style={{ position: 'absolute', top: 0 }}>
          <SkillsBar skills={skillsUnity} />
          <BtnSuite parallax={parallax} numPage={0} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.3}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <h2 className={css.title}>Unity 3D</h2>
        </ParallaxLayer>
      </Parallax>
    </LayoutPage>
  )
}
