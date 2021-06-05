import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

import css from './index.module.scss'

export default function Header() {
  return (
    <div className={css.header}>
      <div>
        <Logo div={css.div} logo={css.logo} shadow={css.shadow} />
      </div>
      <ul className={css.menu}>
        <li>
          <Link to="/">A propos</Link>
          <span>|</span>
        </li>
        <li>
          <Link to="/cv">CV</Link>
          <span>|</span>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
          <span>|</span>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
          <span>|</span>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
