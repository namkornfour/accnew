import React from 'react';
import '../App';

import Header from './Header';
import HeaderBar from './HeaderBar';
import Introserv from './Introserv';
import Intro from './Intro';
import Main from './Main';
import Footer from './Footer';
import Acctax from './Acctax';
import Otherlink from './Otherlink';
import CopyRight from './CopyRight';

const Home = () => {	
	return (
		<div>
			<HeaderBar/>
			<Header/>
			<Introserv/>
			<Intro/>			
			<Main/>
			<Acctax/>
			<Footer/>	
			<Otherlink/>
			<CopyRight/>
		</div>
	);
}

export default Home;