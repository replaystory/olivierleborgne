import React from 'react'

import LayoutPage from '../components/Layout'
import Cards from '../components/Cards'

import css from './Portfolio.module.css'

const Portfolio = () => {
	return (
		<LayoutPage className={css.bg}>
			<h1 className={css.h1}>Portfolio</h1>
			<Cards />
		</LayoutPage>)
	}

export default Portfolio
