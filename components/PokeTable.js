import React from 'react';
import PokeRow from './PokeRow';

class PokeTable extends React.Component {
	render() {
		return <ul className="poketable"> 
			{
				this.props.pokemons.map((pokemon) => {
					return <PokeRow 
						key={pokemon.number} 
						name={pokemon.name} 
						number={pokemon.number} 
						growl={this.props.onGrowl} />
				})
			}
		</ul>
	}
}

export default PokeTable
//growl={this.props.onGrowl(pokemon.name)} />
