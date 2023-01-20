import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pizza-logo.svg'

const Logo = () => {
	return (
		<Link to={'/'}>
			<div className="header__logo">
				<img width="38" src={logo} alt="Pizza logo" />
				<div>
					<h1>React Pizza</h1>
					<p></p>
				</div>
			</div>
		</Link>
	)
}

export default Logo