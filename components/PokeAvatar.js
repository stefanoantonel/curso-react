
import React from 'react';

class PokeAvatar extends React.Component {
	render () {
		var url = "http://veekun.com/dex/media/pokemon/main-sprites/x-y/" + this.props.number +".png";
		return <img src = {url} />
	}
}

export default PokeAvatar