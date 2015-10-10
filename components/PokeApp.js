import React from "react";
import PokeChat from "./PokeChat";
import PokeTable from "./PokeTable";
import uid from "uid";

class PokeApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			pokemons: [
				{number:1, name: "Bulbasor"},
				{number:2, name: "Ivuasor"},
				{number:3, name: "Venusoaur"}
			]
		};
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
		return <div className="pokeapp">
			<PokeTable pokemons={this.state.pokemons} onGrowl={this.onGrowl.bind(this)}/>
			<PokeChat messages={this.state.messages}/>
		</div>
	}
}

export default PokeApp
