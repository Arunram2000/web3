import React from 'react'
import { logo } from '../styles/sheets/components'

function Logo(props) {
	return (
		<img
			style={props.style ? props.style : logo.default}
			src={props.src}
			alt='logo'
		/>
	)
}

export default Logo
