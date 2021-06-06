import React from 'react'

import LayoutPage from '../components/Layout'

import css from './CV.module.css'

export default function CV() {
  return (
    <LayoutPage className={css.bg}>
      <h1 className={css.title}>CV</h1>
    </LayoutPage>
  )
}
