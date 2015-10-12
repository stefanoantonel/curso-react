import React from "react";
import PokeChat from "./PokeChat";
import PokeTable from "./PokeTable";
import uid from "uid";
import $ from "jquery";

class PokeApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			pokemons: []
		};
	}

	/*Vamos a decir que antes de que se monte 
	haga el request para pedir los pokemons 
	Setea lo que recibe con el estado para que se renderee*/
	componentWillMount() {
		$.get("/pokemons", (pokemons) => {
			this.setState({pokemons: pokemons});
		});
	}


	onGrowl(name) {
		//vamos a hacer que se acutalize el state de pokeapp
		//uso let porque es menos gloabl que var
		let growl = name + name + "!";
		let newMessage = {text: growl, id: uid()};
		//ponemos los nuevos mensajes en una variable
		this.state.messages.push(newMessage);
		//asignamos la variable al estado y React llama solo al render()
		this.setState({messages: this.state.messages })
	}

	render() {
		let element;
		if(!this.state.pokemons.length) {
			element = <p>Loading...</p>
		}
		else {
			element = <div className="pokeapp">
				<PokeTable pokemons={this.state.pokemons} onGrowl={this.onGrowl.bind(this)}/>
				<PokeChat messages={this.state.messages}/>
			</div>
		}
		return element;
	}
}

export default PokeApp
