import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Logo from './Logo'

import css from './index.module.scss'

export default function Header() {
  let path = useLocation();
  return (
    <div className={css.header}>
      <div className={css.logodiv}>
        <Logo div={css.div} logo={css.logo} shadow={css.shadow} />
      </div>
      <ul className={css.menu}>
        <li>
          <NavLink to="/" activeClassName={path.pathname === '/' ? css.active : null}>A propos</NavLink>
          <span>|</span>
        </li>
        <li>
          <NavLink to="/cv" activeClassName={css.active}>CV</NavLink>
          <span>|</span>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName={css.active}>Portfolio</NavLink>
          <span>|</span>
        </li>
        <li>
          <NavLink to="/skills" activeClassName={css.active}>Skills</NavLink>
          <span>|</span>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={css.active}>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}
