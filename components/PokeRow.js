import React from 'react';
import PokeAvatar from './PokeAvatar.js';

class PokeRow extends React.Component {
	touch(ev) {
		//console.log(this.props.name);
		//al grow no necesitar contexto lo dejo en null pero al nombre si se lo paso.
		this.props.growl.call(null, this.props.name);
	}

	render() {
		return <li onClick={this.touch.bind(this)}> 
			<PokeAvatar number={this.props.number} />				
			{this.props.name}
		</li>
	}
}

export default PokeRow