import React from "react";
import PokeChat from "./PokeChat";
import PokeTable from "./PokeTable";
import uid from "uid";
import $ from "jquery";
import io from "socket.io-client";

class PokeApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: [],
			pokemons: []
		};
		this.user = uid(10);
	}

	/*Vamos a decir que antes de que se monte 
	haga el request para pedir los pokemons 
	Setea lo que recibe con el estado para que se renderee*/
	componentWillMount() {
		/*request
			.get("/pokemons")
			.end((err, res) => {
			    // Do something
			    console.log(res);
			    console.log(JSON.stringify(res.text));

			    this.setState({pokemons: res.text});
			});*/

		$.get("/pokemons", (pokemons) => {
			this.setState({pokemons: pokemons});
		});

		//Establecemos la conexion con el server
		this.socket = io("http://localhost:3000");
		//Nos suscribimos al evento message que me llega un mensaje
		this.socket.on("message", (message) => {
			if(message.user !== this.user) {
				this.newMessage(message);
			}
		});
	}


	onGrowl(name) {
		//vamos a hacer que se acutalize el state de pokeapp
		//uso let porque es menos gloabl que var
		let growl = name + name + "!";
		let newMessage = {text: growl, id: uid(), user: this.user};
		this.newMessage(newMessage);
		this.socket.emit("message",newMessage);
	}

	newMessage(message) {
		//ponemos los nuevos mensajes en una variable
		this.state.messages.push(message);
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
