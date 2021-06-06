import React from 'react'

import css from './index.module.scss'

export default function SkillsBar({ skills }) {
  return (
    <ul className={css.skills}>
      {skills.map((item) => {
        const w = item.level + '%'
        return (
          <li>
            <div style={{ width: w }}>{item.name}<span>{w}</span></div>
          </li>
        )
      })}
    </ul>
  )
}
