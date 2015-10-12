/*
* Module dependencies
*/

import React from "react";
import {default as Router, Route} from "react-router";

let RouteHandler = Router.RouteHandler;

class App extends React.Component {
	render() {
		return <div>		
			<h1>App</h1>
			<a href="#user">User</a>
			<a href="#about">About</a>
			<RouteHandler/>
		</div>
	}
	// Con el RouteHandler es donde queremos que muestre los cambios 
	//Como un div con la info que segun clickeamos
}

class About extends React.Component {
	render() {
		return <p>This is about information</p>
	}
}

class User extends React.Component {
	render() {
		return <p>This is the user information</p>
	}
}

 // El handler es que component queremos que renderice
let routes = <Route handler={App}>
	<Route path="about" handler={About} />
	<Route path="user" handler={User} />
</Route>

//Si usamos # => HashLocation, si usamos / => HistoryLocation
Router.run(routes, Router.HashLocation, (Root) => {
	//Root es como el component que tiene la logica de las rutas
	React.render(<Root />, document.getElementById("container"));
});