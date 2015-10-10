import React from 'react';
import PokeMessage from './PokeMessage';

class PokeChat extends React.Component {
	render() {
		return <ul className="pokechat">
			{
				//me saltaba un error de map is not a function.. por eso tengo que definir defaultProps
				this.props.messages.map((message) => {
					return <PokeMessage message={message} />
				})
			}
		</ul>
	}
}

PokeChat.defaultProps = {
	messages: []
}
export default PokeChat