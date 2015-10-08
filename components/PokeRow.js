import React from 'react';
import PokeAvatar from './PokeAvatar.js';

class PokeRow extends React.Component {
	render() {
		return <li> 
			<PokeAvatar number={this.props.number} />				
			{this.props.name}
		</li>
	}
}

export default PokeRow;