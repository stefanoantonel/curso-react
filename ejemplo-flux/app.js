
import React from "react";
import ImageGrid from "./components/ImageGrid";
import ImageActions from "./actions/ImageActions";

setInterval(() => {
	ImageActions.fetchList();
} , 5000);

React.render(
	<ImageGrid />,
	document.getElementById("container")
)
