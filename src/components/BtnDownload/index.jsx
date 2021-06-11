import React from 'react'

import css from './index.module.scss'

export default function BtnSuite({ parallax, numPage }) {
  return (
    <button className={css.btn} onClick={() => window.open('/CV-2020-Olivier-LE-BORGNE-Full-Stack.pdf')}>
      DOWNLOAD PDF
    </button>
  )
}
