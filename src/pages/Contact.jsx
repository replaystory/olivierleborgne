import React from 'react'

import LayoutPage from '../components/Layout'

import css from './Contact.module.scss'

const simulateCall = (phoneNumber) => {
  window.open(`tel:${phoneNumber}`, '_self');
}

const mailto = (e, email) => {
  window.location = `mailto:${email}`;
  e.preventDefault();
}

export default function Contact() {
  return (
    <LayoutPage className={css.bg}>
      <h1 className={css.h1}>Contact</h1>
      <p>Olivier LE BORGNE</p>
      <p>Fullstack developer React/NEXT.js</p>
      <p className={css.link} onClick={() => simulateCall('0608953342')}>Tél. 06 08 95 33 42</p>
      <p className={css.link} onClick={(e) => mailto(e, 'olivier@olivierleborgne.com')}>olivier@olivierleborgne.com</p>
    </LayoutPage>
  )
}
