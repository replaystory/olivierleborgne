import React from 'react'

import css from './index.module.scss'

export default function FlipCard({ front, img, width, title, children }) {
  return (
    <div class={css.flipcard}>
      <div class={css.flipcardinner}>
        <div class={css.flipcardfront}>{front ? front : children}</div>
        <div class={css.flipcardback}> {!front ? <img src={img} alt={title} width={width} /> : children}</div>
      </div>
    </div>
  )
}
