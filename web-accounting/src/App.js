import './App.css';

import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';

import Services from './components/Services';
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Service3 from './components/Service3';
import Service4 from './components/Service4';
import Service5 from './components/Service5';
import Service6 from './components/Service6';

import Servicegroup from './components/Servicegroup';
import Webboard from './components/Webboard';

import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Intro4 from './components/Intro4';

import Aboutus from './components/Aboutus';
import User from './components/User';

import Chat2 from './components/Chat2';
import ChatLog from './components/ChatLog';


function App() {
	// const reload = () => window.location.reload();
  return (	
		<div>				
				<Switch>
					<Route exact path="/"><Home/></Route>
					<Route path="/servicegroup"><Servicegroup/></Route>
					<Route path="/services"><Services/></Route>
					<Route path="/service1"><Service1/></Route>
					<Route path="/service2"><Service2/></Route>
					<Route path="/service3"><Service3/></Route>
					<Route path="/service4"><Service4/></Route>
					<Route path="/service5"><Service5/></Route>
					<Route path="/service6"><Service6/></Route>
					
					<Route path="/Webboard"><Webboard/></Route>		

					<Route path="/intro1"><Intro1/></Route>
					<Route path="/intro2"><Intro2/></Route>
					<Route path="/intro3"><Intro3/></Route>
					<Route path="/intro4"><Intro4/></Route>
					
					<Route path="/chat2"><Chat2/></Route>
					<Route path="/chatlog"><ChatLog/></Route>
					<Route path="/aboutus"><Aboutus/></Route>
					
					<Route path="/user"><User/></Route>
				</Switch>
		</div>
  );
}

export default App;
