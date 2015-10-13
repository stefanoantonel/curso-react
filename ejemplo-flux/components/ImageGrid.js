/*
*
*/

import React from "react";
import Reflux from "reflux";
import ImageStore from "../stores/ImageStore";
import uid from "uid";

let ImageGrid = React.createClass({
	mixins: [Reflux.connect(ImageStore, "imagestore")],
	render: function() {
		var result;
		if(this.state.imagestore) {
			result = <div>
			{
				this.state.imagestore.map((image) => {
					return <div key={uid()} className="image">
						<a href={image.link}>
							<img src={image.media.m} />
						</a>
					</div>
				})
			}
			</div>
		}
		else {
			result = <p>No hay imagenes disponibles</p>
		}
		return result;
	}
});

export default ImageGrid;