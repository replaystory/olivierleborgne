import React from 'react'

import css from './index.module.scss'

export default function BtnSuite({ parallax, numPage }) {
  return (
    <button className={css.btn} onClick={() => parallax.current.scrollTo(numPage)}>
      SUITE...
    </button>
  )
}
