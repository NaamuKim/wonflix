import React from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import Home from "Routes/Home/index";
import TV from "Routes/TV/index";
import Search from "Routes/Search/index";
import Detail from "Routes/Detail/index";
import Header from "Components/Header";
import Section from "Components/Section";

const Routers = () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" exact component={TV} />
				<Route path="/search" exact component={Search} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/tv/:id" component={Detail} />

				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
export default Routers;
