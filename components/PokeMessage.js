import React from 'react'

class PokeMessage extends React.Component {
	render() {
		return <li className="pokemessage">
			{this.props.message.text}
		</li>
	}
}

export default PokeMessage