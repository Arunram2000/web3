import React from 'react'
import {section} from '../styles/sheets/layouts/'
const Section = (props) => {
	return <div style={section.default}>{props.children}</div>
}

export default Section
