import React from 'react'

import css from './index.module.scss'

export default function LayoutPage ({ className, children }) {
	return (<div className={`${css.bg} ${className}`}>{children}</div>)
}
