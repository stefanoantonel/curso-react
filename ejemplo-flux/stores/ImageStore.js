/*
* Module dependencies
*/

import Reflux from "reflux";
import $ from "jquery";
import ImageActions from "../actions/ImageActions";

let ImageStore = Reflux.createStore({
	url: "https://api.flickr.com/services/feeds/photos_public.gne?format=json",
	imageList: [],
	listenable: [ImageActions] ,
	init: function () {
		this.fetchList();
	}, 
	fetchList: function() {
		let tags = ["nature","ocean","cars","tech","iphone"];
		let number = Math.floor(Math.random()*5);
		let tag = tags[number];
		$.ajax({
			url: this.url + "&tag=" + tag,
			dataType: "jsonp",
			jsonpCallback: "jsonFlickrFeed",
			cache: false,
			context: this,
			success: function(data) {
				console.log("fetch ok");
				this.imageList = data.items;
				this.trigger(this.imageList);
			}
		});
	}
});

export default ImageStore;