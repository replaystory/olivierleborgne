import React from 'react'

import LayoutPage from '../components/Layout'

import css from './Apropos.module.scss'

export default function Apropos() {
  return (
    <LayoutPage className={css.bg}>
      <h1 className={css.h1}>CV</h1>
    </LayoutPage>
  )
}
