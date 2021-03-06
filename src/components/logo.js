import React from 'react'
import '../styles/patterns/navigations/header.css'
const Logo = (props) => {
	return (
		<img
			src={props.src}
			alt='cover'
			width={props.width ? props.width : '100%'}
			height={props.height ? props.height : '100%'}
			style={props.style}
			className={props.className}
		/>
	)
}

export default Logo
