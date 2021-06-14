import React from 'react'

import css from './index.module.scss'

export default function FlipCard({ front, img, maxheight, title, children }) {
  return (
    <div className={css.flipcard}>
      <div className={css.flipcardinner}>
        <div className={css.flipcardfront}>{front ? front : children}</div>
        <div className={css.flipcardback}> {!front ? <img src={img} alt={title}  style={{maxHeight: maxheight, width: 'auto'}} /> : children}</div>
      </div>
    </div>
  )
}
