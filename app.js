
import React from 'react';
import PokeTable from './components/PokeTable.js';

var pokemons = [
	{number:1, name: "Bulbasor"},
	{number:2, name: "Ivuasor"},
	{number:3, name: "Venusoaur"}
];

React.render( <PokeTable pokemons= {pokemons} />, document.getElementById("first") );
