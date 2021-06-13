import React from 'react'

import css from './index.module.scss'

export default function FlipCard({ front, img, width, title, children }) {
  return (
    <div className={css.flipcard}>
      <div className={css.flipcardinner}>
        <div className={css.flipcardfront}>{front ? front : children}</div>
        <div className={css.flipcardback}> {!front ? <img src={img} alt={title} width={width} /> : children}</div>
      </div>
    </div>
  )
}
