import React from 'react'

import LayoutPage from '../components/Layout'

import css from './Home.module.scss'

const Home = () => {
	return (
	<LayoutPage className={css.bg}>
		<h1 className={css.h1}>CV</h1>
	</LayoutPage>)
}

export default Home
