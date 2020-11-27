import React from 'react';
import Main from './client/components/pages/Main'
import Details from './client/components/pages/Details/Details';
import Result from './client/components/pages/Result/Result';
import {
	BrowserRouter,
	Switch,
	Route,
	useParams
} from "react-router-dom";
const App = _ => {
	return (
	<BrowserRouter>
		<Route exact path="/" component={Main} />
		<Route exact path="/items/search" component={Result} />
		<Route exact path="/items/:id([A-Z0-9]{12})" component={Details} />
	</BrowserRouter>
	);
}

export default App;
