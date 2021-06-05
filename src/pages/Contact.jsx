import React from 'react'

import LayoutPage from '../components/Layout'

import css from './Contact.module.scss'

const Contact = () => {
	return (
		<LayoutPage className={css.bg}>
			<h1 className={css.h1}>Contact</h1>
			<p>Olivier LE BORGNE</p>
			<p>Fullstack developer React/NEXT.js</p>
			<p>Tél. 06 08 95 33 42</p>
			<p>olivier@olivierleborgne.com</p>
		</LayoutPage>)
	}

export default Contact
