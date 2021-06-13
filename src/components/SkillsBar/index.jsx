import React from 'react'

import css from './index.module.scss'

export default function SkillsBar({ skills }) {
  let n = 0
   return (
    <ul className={css.skills}>
      {
      skills.map((item) => {
        const w = item.level + '%'
        n++
        return (
          <li key={n}>
            <div style={{ width: w }}>{item.name}<span>{w}</span></div>
          </li>
        )
      })}
    </ul>
  )
}
