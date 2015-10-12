import React from 'react/addons';
import PokeMessage from './PokeMessage';

//Es el objeto que nos permite agregar o quitar las clases de animacion.
//Ademas es un component por eso lo tenemos que renderizar. 
const { CSSTransitionGroup } = React.addons;

class PokeChat extends React.Component {
	render() {
		return <ul className="pokechat">
			<CSSTransitionGroup transitionName="message-animation">
			{
				//me saltaba un error de map is not a function.. por eso tengo que definir defaultProps
				this.props.messages.map((message) => {
					console.log(message)
					return <PokeMessage key={message.id} message={message} />
				})
			}
			</CSSTransitionGroup>
		</ul>
	}
}

PokeChat.defaultProps = {
	messages: []
}
export default PokeChat