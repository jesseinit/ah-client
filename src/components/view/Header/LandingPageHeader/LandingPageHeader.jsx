import React from 'react';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

const LandingPageHeader = () => {
	return (
		<div className="landingPage__mobile">
		<Link to="/search"><i className="search icon" /></Link>
		<Link to="/login"><Button content="Login" className="btn--primary header__item" /></Link>
		<Link to="/signup"><Button content="Register" className="btn--default" /></Link>	
		</div>
	);
};

export default LandingPageHeader;
